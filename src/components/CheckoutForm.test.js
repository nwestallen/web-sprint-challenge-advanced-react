import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    userEvent.type(firstNameInput,'Johnboy');
    userEvent.type(lastNameInput, 'Namesman');
    userEvent.type(addressInput, '11223');
    userEvent.type(cityInput, 'Townsville');
    userEvent.type(stateInput, 'Ohio');
    userEvent.type(zipInput, '43242');

    const button = screen.getByRole('button', {name: /checkout/i});

    userEvent.click(button);

    const successMessage = /you have ordered some plants! woo-hoo!/i

    expect(screen.getByText(successMessage)).toBeInTheDocument();
});
