import React from "react";
import styled from "styled-components";
import tw from "tw.macro";
 

const LogoContainer = styled.div`
    ${tw`
       font-family[ZCOOL-Kuaile]
       font-black
       text-2xl
       text-white

`}
`

export function Logo(){
    return <LogoContainer>Food Farm</LogoContainer>

}