import React, { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Group } from '@mantine/core';
import {
  Icon as TablerIcon,
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  Home2,
  UserCircle,
  AddressBook,
  School
} from 'tabler-icons-react';
import Icon from '../Icon'



const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors.red[9], 0.25)
          : theme.colors.red[0],
      color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 7],
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: Home2, label: 'Home', link: '#'  },  
  { icon: UserCircle, label: 'About', link: '' },
  { icon: BrandGithub, label: 'GitHub', link: 'https://github.com/RiderCogswell' },  
  { icon: BrandLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/rider-cogswell-608086160/' },
  { icon: BrandInstagram, label: 'Instagram', link: 'https://www.instagram.com/ridercogswell/' },
  { icon: School, label: 'Resume', link: '' },
  { icon: AddressBook, label: 'Contact', link: '' },
];

export default function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar height={450} width={{ base: 80 }} p="md">
      <Center>
        <Icon />
      </Center>
      <Navbar.Section grow mt={20}>
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </Navbar.Section>
      {/* <Navbar.Section>
        <Group direction="column" align="center" spacing={0}>
          <NavbarLink icon={SwitchHorizontal} label="Change account" />
          <NavbarLink icon={Logout} label="Logout" />
        </Group>
      </Navbar.Section> */}
    </Navbar>
  );
}