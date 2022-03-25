import React from 'react';
import Link from 'next/link'
import { paths } from '@utils/path'
import { Navigation, Name, MenuItem, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Navigation>
      <Name>CAIO<sub>.dev</sub></Name>
      <Menu>
        {paths.map(({ to, name }) => (
          <MenuItem key={to}>
            <Link key={to} href={to}>
              <a>{name}</a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Navigation>
  )
}

export default Header;