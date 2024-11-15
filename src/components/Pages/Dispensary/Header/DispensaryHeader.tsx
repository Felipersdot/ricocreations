import React from 'react';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { LogoHeight, colors, fontSizes, fonts } from '../../../../SharedThemes';
import { MEDIUM_DEVICE_WIDTH } from '../../../../utils/browserUtils';
import Header from '../../../Header/Header';

const DispensaryHeader: React.FC = () => {
    const intel = useIntl();
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    const pages = [
        <Link href="/home">Home</Link>,
        <Link href="/dispensary">Dispensary</Link>,
        <Link href="/aboutMe">About</Link>,
        <Link href="/contact">Contact</Link>
    ];

    return (
        <>
            <Header>
                <LogoWrapper>
                    {<img src={'https://ricocreations.com/wp-admin/images/browser.png'} alt="Logo" />}
                </LogoWrapper>
                <LinksContainer>{pages.map((c) => c)}</LinksContainer>
            </Header>
        </>
    );
};

export default DispensaryHeader;

const headerHeight = 50;
const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${colors.navBar};
    box-shadow: 0px 3px 4px 0px #00000024, 0px 3px 11px -2px #00000003;

    height: ${headerHeight - 1}px;
    margin-bottom: 6px;
`;

const LogoWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    margin-right: 20px;

    img {
        padding-left: 12px;
        max-height: ${LogoHeight};
        height: ${LogoHeight};
        align-self: center;
        border: 2px solid red;

        @media only screen and (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
            height: 45px;
        }
    }
`;

const LinksContainer = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    font: normal normal 400 ${fontSizes.md} ${fonts.primary};
    margin-right: 1rem;
    flex: 2 auto;
    justify-content: start;

    li {
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: color 0.15s;
        letter-spacing: 1.28px;
        margin-left: 40px;
        text-align: center;
        opacity: 1;

        a {
            color: white;
            opacity: 0.6;
            text-decoration: none;
            transition: opacity 0.2s ease-in-out;

            &.active,
            :hover {
                opacity: 1;
            }

            &.active {
                font-weight: 500;
            }
        }

        &.active {
            box-shadow: inset 0 -4px 0 white;
        }
    }

    // @media only screen and (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
    //     display: none;
    // }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LinkOption = styled.li`
    margin-right: 10px; /* Adjust the margin as needed */
    text-decoration: none;
    color: blue; /* Set the desired link color */
`;

const Link = styled.a`
    margin-right: 10px; /* Adjust the margin as needed */
    text-decoration: none;
    color: blue; /* Set the desired link color */
`;
