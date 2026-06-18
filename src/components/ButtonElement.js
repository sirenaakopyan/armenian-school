import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 8px;
    background: ${({ primary }) => (primary ? '#c8963e' : '#1e2a4a')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease;
    letter-spacing: 0.01em;

    &:hover {
        background: ${({ primary }) => (primary ? '#b5842e' : '#2c3e6b')};
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(200, 150, 62, 0.3);
    }
    `;
