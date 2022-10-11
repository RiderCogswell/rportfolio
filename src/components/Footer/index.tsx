import { createStyles, Container, Group, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Command } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
      textDecoration: 'none'
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={() => window.location.replace(link.link)}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));
  
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Command size={32} />
        <Group className={classes.links}>
          <Anchor href={document.location.hostname === 'localhost' || '127.0.0.1' ? '/#/contact' : 'https://ridercogswell.github.io/rportfolio/#/contact'} 
            className={classes.links} color='dimmed' key='Contact' size='sm'>
              Contact
          </Anchor>
          {items}
        </Group>
      </Container>
    </div>
  );
}