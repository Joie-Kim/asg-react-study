import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// #region style
const Container = styled(motion.header)`
  position: sticky;
  top: -4px;
  left: 0;
  margin: 10px 0;
  padding: 24px 0;
  width: 100%;
  background-color: black;
`;

const MenuList = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  font-size: 1.25rem;
  font-weight: bold;
`;

const SelectedDot = styled(motion.div)`
  position: absolute;
  bottom: 8px;
  width: 10px;
  height: 10px;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 5px;
  background-color: ${(props) => props.theme.accentColor};
`;
// #endregion

// #region 메뉴 데이터
const MENU = [
  {
    key: 0,
    name: 'POPULAR',
    url: '/',
  },
  {
    key: 1,
    name: 'COMING SOON',
    url: '/coming-soon',
  },
  {
    key: 2,
    name: 'NOW PLAYING',
    url: '/now-playing',
  },
];
// #endregion

const Header = () => {
  const [selected, setSelected] = useState<number>(0);
  const onClick = (key: number) => {
    setSelected(key);
  };
  return (
    <Container>
      <MenuList>
        {MENU.map((menu) => (
          <MenuItem key={menu.key} onClick={() => onClick(menu.key)}>
            <Link to={menu.url}>{menu.name}</Link>
            {selected === menu.key && <SelectedDot layoutId='selected' />}
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

export default Header;
