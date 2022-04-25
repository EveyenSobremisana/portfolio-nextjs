import NextLink from "next/link";
import styled from "styled-components";
import media from "css-in-js-media";

export default function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <Anchor>{children}</Anchor>
    </NextLink>
  );
}

const Anchor = styled.a`
  font-size: 30px;
  text-decoration: none;
  font-weight: 700;
  font-family: var(--font);
  color: var(--darkGreen);

  &:hover {
    color: var(--brown);
  }

  &:active {
    color: var(--brown);
  }

  ${media(">desktop")} {
    font-size: 45px;
  }
`;
