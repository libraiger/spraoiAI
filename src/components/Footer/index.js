import Box from '@spraoi/base/Box';
import React from 'react';
import { Link } from 'gatsby';
import Icon from '../Icon';
import Section from '../Section';

const Footer = () => (
  <Box as="footer" sx={{ bg: 'primaryBg', mt: 7 }}>
    <Section as="nav" sx={{ py: 8 }}>
      <Box
        sx={{
          alignItems: ['center', null, 'left'],
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          textAlign: ['center', null, 'left'],
        }}
      >
        {[
          {
            heading: 'Solutions & Services',
            links: [
              ['/machine-learning-solutions/', 'Machine Learning'],
              ['/customer-experience-solutions/', 'Customer Experience'],
              ['/services/', 'Services'],
            ],
          },
          {
            heading: 'Company',
            links: [
              ['/about-us/', 'About Us'],
              ['/perspectives/', 'Perspectives'],
              ['/contact/', 'Contact Us'],
            ],
          },
        ].map((item) => (
          <Box
            sx={{
              '&:first-of-type': { h2: { mt: 0 }, ml: 0 },
              ml: [null, null, 8],
            }}
          >
            <Box as="h2" sx={{ fontSize: 4, mt: [7, null, 0] }}>
              {item.heading}
            </Box>
            <Box
              as="ul"
              sx={{
                display: 'flex',
                flexDirection: ['column', null, null, 'row'],
                mt: 4,
              }}
            >
              {item.links.map(([link, text]) => (
                <Box key={link} as="li" sx={{}}>
                  <Box
                    activeClassName="active"
                    as={Link}
                    partiallyActive
                    sx={{
                      '&.active, &:hover': { color: 'accentLight' },
                      color: 'accentDark',
                      display: 'block',
                      mr: [null, null, null, 6],
                      py: 3,
                    }}
                    to={link}
                  >
                    {text}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          justifyContent: 'space-between',
          mt: 7,
        }}
      >
        <Link to="/">
          <Icon
            alt="spraoi"
            svg="spraoi-logo"
            sx={{
              color: 'white',
              mt: 3,
              width: '10.25rem',
            }}
          />
        </Link>
        <Box
          sx={{
            bg: 'accentDark',
            content: ' ',
            display: ['none', null, null, 'block'],
            height: '1px',
            opacity: 0.2,
            width: '30rem',
          }}
        />
        <Box as="ul" sx={{ display: 'flex', mt: [4, null, null, 0] }}>
          {[
            {
              alt: 'on LinkedIn',
              icon: 'linkedin',
              link: 'https://www.linkedin.com/company/spraoi.ai',
            },
            {
              alt: 'on Twitter',
              icon: 'twitter',
              link: 'https://twitter.com/spraoit',
            },
            {
              alt: 'on Facebook',
              icon: 'facebook',
              link: 'https://www.facebook.com/spraoisoftware',
            },
            {
              alt: 'on Instagram',
              icon: 'instagram',
              link: 'https://www.instagram.com/spraoi_tech',
            },
          ].map((item) => (
            <Box key={item.link} as="li" sx={{}}>
              <Box
                as="a"
                href={item.link}
                sx={{
                  '&:hover': { color: 'accentLight' },
                  color: 'accentDark',
                  display: 'block',
                  p: 4,
                  transition: 'color 0.2s',
                }}
              >
                <Icon alt={item.alt} svg={item.icon} sx={{ width: '1.5rem' }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  </Box>
);

export default Footer;
