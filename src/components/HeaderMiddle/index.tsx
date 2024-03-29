import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container } from '@mantine/core';
import { IconBrandGithub, IconBrandYoutube, IconBrandLinkedin, IconSun, IconMoon  } from '@tabler/icons';
import { Command } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },

  links: {
    width: 260,
  },

  social: {
    width: 260,
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: '#808080',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xs,
      borderRadius: theme.radius.xs,
    },

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors.red[1],
      color: theme.colors.red,
    },
  }
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {

  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [isClicked, setIsClicked] = useState(false);

  const toggle = (): void => {

    let element = document.body;

    element.classList.toggle('dark');  

    setIsClicked(isClicked => !isClicked)
  }

  const items = links.map((link) => (
    <Link
      color={isClicked ? 'grey' : 'black'}
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(): void => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));  

  return (
    <Header height={56} mb={120} className={isClicked ? "sticky dark" : "sticky"} style={isClicked ? {borderBottom: '1px solid #353a3c', marginBottom: '120px'} : {borderBottom: '1px solid #e9ecef', marginBottom: '120px'}}>
      <Container className={classes.inner}>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Command size={48} />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <span title={isClicked ? "Light Mode" : "Dark Mode"}>
            <ActionIcon size="lg" onClick={toggle} >
              {isClicked ? <IconSun size={18} stroke={2} color='grey' /> : <IconMoon size={18} stroke={2} color='grey' />} 
            </ActionIcon>
          </span>

          <span title="GitHub" >
            <ActionIcon size="lg" datatype="Github" onClick={(): void => {
              window.open('https://github.com/RiderCogswell', '_blank')
            }} >
              <IconBrandGithub size={18} stroke={2} color='grey' />
            </ActionIcon>
          </span>


          <span title="LinkedIn">
            <ActionIcon size="lg" datatype="LinkedIn" onClick={(): void => {
              window.open('https://www.linkedin.com/in/rider-cogswell-608086160/', '_blank')
            }} >
              <IconBrandLinkedin size={18} stroke={2} color='grey' />
            </ActionIcon>
          </span>

          <span title="YouTube">
            <ActionIcon size="lg" datatype="YouTube" onClick={(): void => {
            window.open('https://www.youtube.com/channel/UCJB7Moei5mRIOgaSRQyeMRA', '_blank')
            }} >
              <IconBrandYoutube size={19} stroke={2} color='grey' />
            </ActionIcon>
          </span>
          
        </Group>
      </Container>
    </Header>
  );
}