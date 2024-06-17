"use client";
import {
  Box,
  Text,
  Center,
  Button,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import hero from "../../app/assets/img/stablecoin/hero.svg";
import wave from "../../app/assets/Ecosystem/waves.png";
import trustless from "../../app/assets/img/stablecoin/Trustless.svg";
import fully from "../../app/assets/img/stablecoin/fully.svg";
import self from "../../app/assets/img/stablecoin/self.svg";
import Image from "next/image";

const Stablecoin = () => {
  return (
    <>
      {/* Hero */}
      <Box
        bgImage={wave}
        position={"relative"}
        zIndex={11111111111111}
        w={"100%"}
        backgroundPosition="left"
      >
        <Center>
          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "flex-start",
              "2xl": "flex-start",
            }}
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
              "2xl": "center",
            }}
            w={"90%"}
            mt={"100px"}
            mb={"106px"}
          >
            <Center>
              <Box
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "45rem",
                  xl: "50rem",
                  "2xl": "50rem",
                }}
                color={"brand.100"}
              >
                <Text
                  fontSize={{
                    base: "40px",
                    sm: "40px",
                    md: "40px",
                    lg: "60px",
                    xl: "60px",
                    "2xl": "60px",
                  }}
                  fontWeight={"bold"}
                >
                  Truly Decentralized
                  <span
                    style={{
                      background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {" "}
                    Stablecoin
                  </span>
                  : USDAO
                </Text>
                <Text
                  fontSize={"16px"}
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "45rem",
                    lg: "30rem",
                    xl: "40rem",
                    "2xl": "70rem",
                  }}
                  mt={"30px"}
                  mb={"30px"}
                >
                  USDAO is a decentralized stablecoin with complete transparency
                  regarding its collateralization, ensuring resilience during
                  the market crash by stabilizing the USDAO pool through Onvault
                  CDP and USDAO Governance
                </Text>
                <UnorderedList fontSize={"16px"} ml={-3}>
                  <ListItem mb={3}>USDAO is pegged to 1 USD : 1 USDAO</ListItem>
                  <ListItem mb={3}>Crypto Collateralized stablecoin</ListItem>
                  <ListItem mb={3}>
                    Onvault Protocol ensures over-collateralization in USDAO
                    pool
                  </ListItem>
                </UnorderedList>
                <Button
                  bgGradient="linear(to-l, #FEBC18, #FF3934)"
                  w={"224px"}
                  h={"66px"}
                  fontSize={"20px"}
                  color={"brand.100"}
                  p={"21px 43px 21px 43px"}
                  borderRadius={"40px"}
                  mb={"115px"}
                  mt={"50px"}
                  _hover={{ borderColor: "#FEBC18" }}
                  onClick={() => {
                    window.open("https://docs.usdao.io/usdao");
                  }}
                >
                  Discover More
                </Button>
              </Box>
            </Center>
            <Center>
              <Box w={"70%"}>
                <Image src={hero} w={"50rem"} />
              </Box>
            </Center>
          </Box>
        </Center>
      </Box>

      <Center>
        <Box
          // border={"1px solid red"}
          color={"white"}
          display={"flex"}
          justifyContent="center"
          flexDirection="column"
          alignItems={"center"}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "90%",
            xl: "70%",
            "2xl": "70%",
          }}
          textAlign={"center"}
          mb={"110px"}
        >
          <Text
            mb={"20px"}
            fontSize={{
              base: "40px",
              sm: "40px",
              md: "40px",
              lg: "60px",
              xl: "60px",
              "2xl": "60px",
            }}
          >
            The World&apos;s Most
            <span
              style={{
                background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transparent Stablecoin{" "}
            </span>{" "}
          </Text>
          <Text
            fontSize={"16px"}
            textAlign={"center"}
            // w={"50rem"}
            color={"#A1A1A1"}
          >
            The USDAO Stablecoin is the main token of the protocol, and as its
            name suggests, it acts as a stablecoin pegged 1:1 with the US
            Dollar.
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "80%",
            xl: "90%",
            "2xl": "90%",
          }}
        >
          <Box
            bg={"#1D1C23"}
            borderRadius={"32px"}
            p={{
              base: "42px 0px 42px 0px",
              sm: "42px 0px 42px 0px",
              md: "42px 0px 42px 0px",
              lg: "42px 0px 42px 0px",
              xl: "42px 258px 42px 258px",
              "2xl": "42px 258px 42px 258px",
            }}
          >
            <Center>
              <Text
                fontSize={{
                  base: "40px",
                  sm: "40px",
                  md: "40px",
                  lg: "60px",
                  xl: "60px",
                  "2xl": "60px",
                }}
                fontWeight={"bold"}
                color={"brand.100"}
                textAlign={"center"}
              >
                USDAO{" "}
                <span
                  style={{
                    background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  Features
                </span>
              </Text>{" "}
            </Center>
            <Text
              fontSize={"16px"}
              textAlign={"center"}
              // w={"70rem"}
              color={"#A1A1A1"}
            >
              USDAO is a fully collateralized stablecoin designed to hold its
              dollar peg even during market downturns and black swan events.
            </Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          // border={"1px solid red"}
          display={"flex"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          w={{
            base: "column",
            sm: "column",
            md: "100%",
            lg: "80%",
            xl: "90%",
            "2xl": "90%",
          }}
          gap={{
            base: "30px",
            sm: "30px",
            md: "30px",
            lg: "2rem",
            xl: "5rem",
            "2xl": "5rem",
          }}
          mt={"5rem"}
        >
          <Box
            border={"none"}
            borderRadius={"32px"}
            borderWidth={"2px"}
            _hover={{ borderColor: "#FEBC18" }}
            // borderColor={"#FEBC18"}
            bg={"#1D1C23"}
            borderStyle={"solid"}
            p={"30px"}
            w={"100%"}
          >
            <Image src={trustless} mb={"30px"} />
            <Text
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"22px"}
              mb={"20px"}
            >
              {" "}
              Trustless & Open System
            </Text>
            <Text color={"#878787"} fontSize={"16px"} w={"78%"} mb={"39px"}>
              The USDAO stablecoin is available to everyone to use. Simply
              connect a compatible ERC-20 wallet, and you are set to go.
            </Text>
            <Text color={"#F88311"}>Explore More</Text>
          </Box>
          <Box
            border={"none"}
            w={"100%"}
            borderRadius={"32px"}
            borderWidth={"2px"}
            _hover={{ borderColor: "#FEBC18" }}
            // borderColor={"#FEBC18"}
            bg={"#1D1C23"}
            borderStyle={"solid"}
            p={"30px"}
          >
            <Image src={fully} mb={"30px"} />
            <Text
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"22px"}
              mb={"20px"}
            >
              {" "}
              Fully Collateralized{" "}
            </Text>
            <Text color={"#878787"} fontSize={"16px"} w={"78%"} mb={"39px"}>
              The USDAO protocol is fully crypto backed and designed to ensure
              total collateralization at all times.
            </Text>
            <Text color={"#F88311"}>Explore More</Text>
          </Box>
          <Box
            border={"none"}
            w={"100%"}
            borderRadius={"32px"}
            borderWidth={"2px"}
            _hover={{ borderColor: "#FEBC18" }}
            // borderColor={"#FEBC18"}
            bg={"#1D1C23"}
            borderStyle={"solid"}
            p={"30px"}
          >
            <Image src={self} mb={"30px"} />
            <Text
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"22px"}
              mb={"20px"}
            >
              {" "}
              Self Sustained Protocol{" "}
            </Text>
            <Text color={"#878787"} fontSize={"16px"} w={"78%"} mb={"39px"}>
              The USDAO ecosystem has low transaction fees, which are added to
              the USDAO Revenue contract to further collateralize the USDAO pool
              through governance
            </Text>
            <Text color={"#F88311"}>Explore More</Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          color={"white"}
          display={"flex"}
          justifyContent="center"
          flexDirection="column"
          alignItems={"center"}
          textAlign={"center"}
          mt={"110px"}
          mb={"100px"}
        >
          <Text
            mb={"20px"}
            fontSize={{
              base: "40px",
              sm: "40px",
              md: "40px",
              lg: "60px",
              xl: "60px",
              "2xl": "60px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Buy and Sell{" "}
            </span>{" "}
            USDAO in Easy Steps
          </Text>
          {/* <Text
            fontSize={"16px"}
            textAlign={"center"}
            w={"70rem"}
            color={"#A1A1A1"}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </Text> */}
        </Box>
      </Center>

      <Center>
        <Box
          bgColor={"#1D1C23"}
          w={{
            base: "column",
            sm: "column",
            md: "100%",
            lg: "80%",
            xl: "90%",
            "2xl": "90%",
          }}
          display={"flex"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems={"center"}
          gap={{
            base: "0px",
            sm: "0px",
            md: "0px",
            lg: "0px",
            xl: "0px",
            "2xl": "0px",
          }}
          borderRadius={"20px"}
          mb={"50px"}
        >
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
            p={{
              base: "10px",
              sm: "20px",
              md: "40px 60px 40px 80px",
              lg: "20px 79px 20px 80px",
              xl: "80px 100px 80px 80px",
              "2xl": "76px 80px 75px 80px;",
            }}
            fontWeight={"bold"}
          >
            <Text
              fontSize={{
                base: "40px",
                sm: "40px",
                md: "40px",
                lg: "60px",
                xl: "60px",
                "2xl": "60px",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Buy USDAO
              </span>
            </Text>
          </Box>
          <Box
            color={"white"}
            p={{
              base: "20px",
              sm: "20px",
              md: "20px",
              lg: "20px",
              xl: "20px",
              "2xl": "28px",
            }}
          >
            <Text>
              A user can buy USDAO by minting through Onvault by opening a vault
              with minimum 125% wBTC equivalent of USDAO at 1:1 ratio payout or
              through the CEX or DEX where the USDAO will be listed. Users can
              only use the official USDAO Application for the minting of USDAO
              Stablecoin.
            </Text>
            <Text color={"#F88311"}>Explore More</Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          bgColor={"#1D1C23"}
          w={{
            base: "column",
            sm: "column",
            md: "100%",
            lg: "80%",
            xl: "90%",
            "2xl": "90%",
          }}
          display={"flex"}
          flexDirection={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems={"center"}
          gap={{
            base: "0px",
            sm: "0px",
            md: "0px",
            lg: "0px",
            xl: "0px",
            "2xl": "0px",
          }}
          borderRadius={"20px"}
          mb={"50px"}
        >
          {" "}
          <Box
            color={"white"}
            p={{
              base: "20px",
              sm: "20px",
              md: "20px",
              lg: "20px",
              xl: "20px",
              "2xl": "28px",
            }}
          >
            <Text>
              A user can sell USDAO by closing the vault anytime on Onvault and
              can receive the amount in wBTC according to the position of Vault.
              Users can only use the official USDAO Application for burning of
              USDAO Stablecoin.
            </Text>
            <Text color={"#F88311"}>Explore More</Text>
          </Box>
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
            p={{
              base: "10px",
              sm: "20px",
              md: "40px 60px 40px 80px",
              lg: "20px 79px 20px 80px",
              xl: "80px 100px 80px 80px",
              "2xl": "76px 80px 75px 80px;",
            }}
          >
            <Text
              fontSize={{
                base: "40px",
                sm: "40px",
                md: "40px",
                lg: "60px",
                xl: "60px",
                "2xl": "60px",
              }}
              fontWeight={"bold"}
            >
              <span
                style={{
                  background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sell USDAO{" "}
              </span>
            </Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          color={"white"}
          display={"flex"}
          justifyContent="center"
          flexDirection="column"
          alignItems={"center"}
          mb={"100px"}
          w={{
            base: "90%",
            sm: "90%",
            md: "100%",
            lg: "100%",
            xl: "100%",
            "2xl": "100%",
          }}
        >
          <Text
            // border={"1px solid red"}
            mb={{
              base: "10px",
              sm: "10px",
              md: "10px",
              lg: "20px",
              xl: "20px",
              "2xl": "20px",
            }}
            fontSize={{
              base: "30px",
              sm: "30px",
              md: "40px",
              lg: "60px",
              xl: "60px",
              "2xl": "60px",
            }}
          >
            USDAO
            <span
              style={{
                background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ecosystem Fees{" "}
            </span>{" "}
          </Text>
          {/* <Text
            fontSize={"16px"}
            textAlign={"center"}
            w={"70rem"}
            color={"#A1A1A1"}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </Text> */}
        </Box>
      </Center>

      <Center>
        <Box
          display={"flex"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          // textAlign={"center"}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "80%",
            xl: "90%",
            "2xl": "90%",
          }}
          gap={"2rem"}
          mb={"50px"}
        >
          <Box
            border={"none"}
            borderRadius={"32px"}
            borderWidth={"2px"}
            _hover={{ borderColor: "#FEBC18" }}
            bg={"#1D1C23"}
            borderStyle={"solid"}
            p={"30px"}
            w={"100%"}
            minH={{
              base: "200px",
              sm: "200px",
              md: "200px",
              lg: "230px",
              xl: "200px",
              "2xl": "200px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={"16px"}
              w={"78%"}
            >
              USDAO Mint: 0% of the transaction total deducted when exchanging
              USDAO for USDAO.
            </Text>
          </Box>
          <Box
            border={"none"}
            borderRadius={"32px"}
            borderWidth={"2px"}
            _hover={{ borderColor: "#FEBC18" }}
            bg={"#1D1C23"}
            borderStyle={"solid"}
            p={"30px"}
            w={"100%"}
            minH={{
              base: "200px",
              sm: "200px",
              md: "200px",
              lg: "100px",
              xl: "200px",
              "2xl": "200px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={"16px"}
              w={"78%"}
            >
              USDAO Burn: 0.3% of the transaction total will be deducted when
              exchanging USDAO for USDAO.
            </Text>
          </Box>
          <Box
            border={"none"}
            borderRadius={"32px"}
            borderWidth={"2px"}
            _hover={{ borderColor: "#FEBC18" }}
            bg={"#1D1C23"}
            borderStyle={"solid"}
            p={"30px"}
            w={"100%"}
            minH={{
              base: "200px",
              sm: "200px",
              md: "200px",
              lg: "230px",
              xl: "200px",
              "2xl": "200px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={"16px"}
              w={"78%"}
            >
              USDAO Transfer: 0% Transaction Fee, to boost user adoption
            </Text>
          </Box>
          {/* <Box
            border={"none"}
            borderRadius={"32px"}
            borderWidth={"2px"}
            _hover={{ borderColor: "#FEBC18" }}
            bg={"#1D1C23"}
            borderStyle={"solid"}
            p={"30px"}
            w={"100%"}
            minH={{
              base: "200px",
              sm: "200px",
              md: "200px",
              lg: "230px",
              xl: "200px",
              "2xl": "200px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={"16px"}
              w={"78%"}
            >
              Onvault Staking: 0.5% of the claim amount in the Acquired Asset
              token will be deducted from the user
            </Text>
          </Box> */}
        </Box>
      </Center>

      <Center>
        <Text color={"#A1A1A1"} mb={"50px"}>
          *Above Mentioned Fees Are Subject To Change, please refer latest
          official documentation or Governance
        </Text>
      </Center>
      <Center>
        <Button
          w={{
            base: "13rem",
            xsm: "13rem",
            sm: "25rem",
            md: "25rem",
            lg: "25rem",
            xl: "25rem",
            "2xl": "10rem",
          }}
          whiteSpace="wrap"
          variant="unstyled"
          p={{
            base: "2px 23px",
            sm: "2px 23px",
            md: "2px 40px",
            lg: "2px 40px",
            xl: "2px 40px",
            "2xl": "20px 40px",
          }}
          color={"brand.100"}
          borderWidth="2px"
          borderStyle="solid"
          borderColor="#FEBC18"
          bg="transparent"
          borderRadius={"40px"}
          _hover={{ borderColor: "#FF3934" }}
          fontSize={"20px"}
          mb={"100px"}
          h="fit-content"
          onClick={() => {
            window.open("https://docs.usdao.io/usdao");
          }}
        >
          Visit Developer Documentation
        </Button>
      </Center>
    </>
  );
};

export default Stablecoin;
