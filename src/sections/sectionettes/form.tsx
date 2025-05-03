import React from 'react';
import styled from 'styled-components';
import '../../index.css'

const Form = () => {
  return (
    <StyledWrapper>
      <form className="stackedForm font1 mt-28">
        <ul className="wrapper">
          <li style={{ "--i": 4 } as React.CSSProperties}>
            <input required placeholder="Name" type="text" className="input" />
          </li>
          <li style={{ "--i": 3 } as React.CSSProperties}>
            <input name="phone" required placeholder="Phone number" className="input" />
          </li>
          <li style={{ "--i": 2 } as React.CSSProperties}>
            <input name="email" required placeholder="E-mail" type="email" className="input" />
          </li>
          <li>
            <button style={{ "--i": 1 } as React.CSSProperties}><span>Submit</span></button>
          </li>
        </ul>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  
  /* Don't be afraid to experiment by
   * changing the following properties:
   */
  .stackedForm {
    --form-btn-color-3: #fff3d6;
    --form-btn-color-2: #ffe8b3;
    --form-btn-color-1: #ffd966;
    --form-btn-color: #d4af37;
    --form-btn-active-color: #ffcc00;
    --form-rotation: rotate3d(0, 1, 0, 180deg);
    --form-text-padding-left: 15px;
  }

  .stackedForm {
    transform: var(--form-rotation);
    scale: 1.2;
  }

  .stackedForm .input,
  .stackedForm button {
    width: 100%;
    height: 50px;  /* Increased height */
    position: relative;
    padding: 10px;
    border: 0.1px solid var(--form-btn-active-color);
  }

  .stackedForm button {
    background: var(--form-btn-color);
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  .stackedForm button span {
    display: block;
    transform: var(--form-rotation);
  }

  .stackedForm .wrapper {
    position: relative;
    transform: skewY(-14deg);
    padding: 0;
    margin: 0;
  }

  .stackedForm .wrapper li,
  .stackedForm button {
    position: relative;
    list-style: none;
    width: 280px;  /* Increased width */
    z-index: var(--i, 0);
    transition: 0.3s;
    color: white;
  }

  .stackedForm .wrapper li::before,
  .stackedForm button::before {
    position: absolute;
    content: "";
    background: var(--form-btn-color);
    top: 0;
    left: -40px;
    width: 40px;
    height: 50px;  /* Match the height */
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.3s;
  }

  .stackedForm .wrapper li::after,
  .stackedForm button::after {
    position: absolute;
    content: "";
    background: var(--form-btn-color);
    width: 280px;  /* Match the width */
    height: 40px;
    top: -40px;
    left: 0;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.3s;
  }

  .stackedForm .wrapper li:nth-child(1)::after,
  .stackedForm .wrapper li:nth-child(1)::before {
    background-color: var(--form-btn-color-3);
  }

  .stackedForm .wrapper li:nth-child(2)::after,
  .stackedForm .wrapper li:nth-child(2)::before {
    background-color: var(--form-btn-color-2);
  }

  .stackedForm .wrapper li:nth-child(3)::after,
  .stackedForm .wrapper li:nth-child(3)::before {
    background-color: var(--form-btn-color-1);
  }

  .stackedForm li .input {
    outline: none;
    border: none;
    padding: 0;
    padding-left: var(--form-text-padding-left);
    width: calc(100%);
    color: black;
    transform: var(--form-rotation);
    font-size: 16px;  /* Larger font size */
  }

  .stackedForm li .input::placeholder {
    color: black;
  }

  .stackedForm li:nth-child(1) .input {
    background: var(--form-btn-color-3);
  }

  .stackedForm li:nth-child(2) .input {
    background: var(--form-btn-color-2);
  }

  .stackedForm li:nth-child(3) .input {
    background: var(--form-btn-color-1);
  }

  .stackedForm li:nth-child(1) .input:focus {
    outline: none;
    border: 0px solid var(--form-btn-color-3);
  }

  .stackedForm li:nth-child(2) .input:focus {
    outline: none;
    border: 0px solid var(--form-btn-color-2);
  }

  .stackedForm li:nth-child(3) .input:focus {
    outline: none;
    border: 0px solid var(--form-btn-color-1);
  }

  .stackedForm .wrapper li:hover,
  .stackedForm button:hover,
  .stackedForm .wrapper li:has(input:focus),
  .stackedForm button:focus {
    transform: translateX(-20px);
  }

  .stackedForm button:hover,
  .stackedForm button:hover::before,
  .stackedForm button:hover::after,
  .stackedForm button:focus,
  .stackedForm button:focus::before,
  .stackedForm button:focus::after {
    background: var(--form-btn-active-color);
  }

  .stackedForm button:active {
    transform: translateX(0px);
  }
`;

export default Form;