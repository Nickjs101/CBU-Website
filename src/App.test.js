import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('product inquiries carry the selected product to the quote form and allow changing it', () => {
  render(<App />);
  const products = screen.getByRole('region', { name: /the right tank/i });
  const storage = within(products).getByRole('heading', { name: 'Storage tank' }).closest('article');
  fireEvent.click(within(storage).getByRole('link', { name: 'Ask about this product' }));
  const selection = screen.getByRole('combobox', { name: /interested in/i });
  expect(selection).toHaveValue('Storage tank');
  fireEvent.change(selection, { target: { value: 'Pressurized tank' } });
  expect(selection).toHaveValue('Pressurized tank');
  fireEvent.click(screen.getByRole('link', { name: /discuss a custom tank/i }));
  expect(selection).toHaveValue('Custom tank');
});

test('mobile navigation closes on Escape, restores focus, and closes on choosing a section', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Open navigation' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
  fireEvent.click(toggle);
  fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Our products' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('gallery expands all unique project photos and collapses on request', () => {
  render(<App />);
  const gallery = screen.getByRole('region', { name: /real projects/i });
  expect(within(gallery).getAllByRole('img')).toHaveLength(3);
  fireEvent.click(within(gallery).getByRole('button', { name: /view all 16/i }));
  expect(within(gallery).getAllByRole('img')).toHaveLength(16);
  expect(new Set(within(gallery).getAllByRole('img').map(img => img.src)).size).toBe(16);
  fireEvent.click(within(gallery).getByRole('button', { name: /show fewer/i }));
  expect(within(gallery).getAllByRole('img')).toHaveLength(3);
});

test('quote form validates required contact details and keeps the existing POST destination', () => {
  render(<App />);
  const form = screen.getByRole('button', { name: /send your inquiry/i }).closest('form');
  expect(form).toHaveAttribute('method', 'POST');
  expect(form).toHaveAttribute('action', 'https://submit-form.com/OWbcYrEsl');
  expect(form.checkValidity()).toBe(false);
  fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Juan Dela Cruz' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'invalid' } });
  fireEvent.change(screen.getByLabelText(/tell us about your project/i), { target: { value: 'One storage tank for Pampanga.' } });
  expect(form.checkValidity()).toBe(false);
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'juan@example.com' } });
  expect(form.checkValidity()).toBe(true);
});

test('page has one main heading and every internal link points to an existing section', () => {
  const { container } = render(<App />);
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  for (const link of container.querySelectorAll('a[href^="#"]')) {
    expect(document.getElementById(link.hash.slice(1))).not.toBeNull();
  }
});
