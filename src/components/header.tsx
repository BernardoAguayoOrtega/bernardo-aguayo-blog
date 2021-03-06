import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;

  @media (max-width: 400px) {
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 400px) {
    font-size: 1.3rem;
    padding: 0.3rem 0;
    margin: 0 auto;
  }
`

const GitHubLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 400px) {
    font-size: 1.3rem;
    padding: 0.3rem 0;
    margin: 0 auto;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Theme = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 400px) {
    font-size: 1.3rem;
    padding: 0.3rem 0;
    margin: 0 auto;
  }
`

interface headerData {
  siteTitle: string
}

const Header: React.FC<headerData> = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <HomeLink to="/">{siteTitle}</HomeLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <GitHubLink
        href="https://github.com/BernardoAguayoOrtega"
        target="_blank"
      >
        GitHub
      </GitHubLink>
      <NavLink to="/blog">Blog</NavLink>
      <Theme>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
              />{" "}
              {theme}
            </label>
          )}
        </ThemeToggler>
      </Theme>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
