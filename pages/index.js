import Head from 'next/head'
import styled from "styled-components";

const ContainerStyles = styled.main`
  background-image: url('/container-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  gap: 5em;
  align-items: center;
`;

const LeftSideStyles = styled.div`
  height: 80vh;
  width: 30vw;
  background-color: #f8f1ec;
  // aedafe
  // 1e6095
`;

const RightSideStyles = styled.div`
  background-color: #1e6095;
  height: 60vh;
  width: 50vw;
`;

const IntroductionStyles = styled.div`
  font-size: 3em;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Eric Aig</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerStyles>
        <LeftSideStyles>

        </LeftSideStyles>
        <RightSideStyles>
          <IntroductionStyles>
            {/* Hi, my name is Eric Aig */}
          </IntroductionStyles>
        </RightSideStyles>
      </ContainerStyles>
    </>
  )
}
