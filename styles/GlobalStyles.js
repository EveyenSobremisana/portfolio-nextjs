import { createGlobalStyle } from "styled-components";

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

:root {
  --font: 'Poppins', sans-serif;
  --darkBrown: #362C26;
  --brown: #6c584c;
  --lightBrown: #A98467;
  --darkGreen: #6e813c;
  --green: #ADC178;
  --lightGreen: #DDE5B6;
  --cream: #F0EAD2;
}

.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}

.logo {
  text-decoration: none;
  font-weight: 700;
  font-family: var(--font);
  font-size: 45px;
  color: rgb(var(--darkBrown));
}
}`;
