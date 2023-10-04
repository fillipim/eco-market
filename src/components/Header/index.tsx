"use client";

import { Button } from "../Button";
import Input from "../Input";
import { StyleLink } from "../Link";
import * as S from "./header.style";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle, BiSolidCartAlt, BiLogOutCircle } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  Button as ChackraButton,
  MenuList,
  MenuItem,
  IconButton as iconChackra,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "@/contexts/AuthContext";
import IconButton from "../IconButton";
import Link from "next/link";
import Cart from "../Cart";

const Header: React.FC = () => {
  const { isLoged, user, logOut } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Cart isOpen={isOpen} onClose={onClose} />
    <S.Header>
      <S.HeaderTop>
        <p>Welcome to Food Market</p>
        <div className="auth_nav">
          {!isLoged ? (
            <>
              <StyleLink href="/login">Login</StyleLink>
              <StyleLink href="/register">Cadastre-se</StyleLink>
            </>
          ) : (
            <p>Olá {user?.nome}</p>
          )}
        </div>
      </S.HeaderTop>

      <S.HeaderCenter>
        <Heading fontSize="2xl">
          Food{" "}
          <Text as="span" color="orange.100">
            Market
          </Text>
        </Heading>

        <S.Nav>
          <Menu>
            <MenuButton as={iconChackra} icon={<BiUserCircle />}></MenuButton>
            <MenuList>
              {isLoged ? (
                <>
                  <MenuItem color="black" as={Link} href="/perfil">
                    Perfil
                  </MenuItem>
                  <MenuItem
                    as={ChackraButton}
                    leftIcon={<BiLogOutCircle />}
                    onClick={logOut}
                  >
                    Sair
                  </MenuItem>
                </>
              ) : (
                <MenuItem as={Link} href="/register">
                  Criar Conta
                </MenuItem>
              )}
            </MenuList>
          </Menu>
          <Button variant="unstyled" onClick={onOpen}>
            <BiSolidCartAlt />
            Carrinho
          </Button>
        </S.Nav>
      </S.HeaderCenter>
    </S.Header>
    </>
  );
};

export default Header;
