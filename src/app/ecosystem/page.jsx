"use client";
import { Box, Text, Center, Button } from "@chakra-ui/react";
import hero from "../../app/assets/Ecosystem/hero.png";
import serri from "../../app/assets/Ecosystem/serri.svg";
import fibit from "../../app/assets/Ecosystem/febitpro.svg";
import punedao from "../../app/assets/Ecosystem/punedao.svg";
import taskon from "../../app/assets/Ecosystem/taskon.svg";
import threeway from "../../app/assets/Ecosystem/threeways.svg";
import cred from "../../app/assets/Ecosystem/cred.svg";
import dao from "../../app/assets/Ecosystem/doolens.svg";
import web from "../../app/assets/Ecosystem/web.svg";
import gfuture from "../../app/assets/Ecosystem/gfuture.svg";
import labs196 from "../../app/assets/Ecosystem/labs196.svg";
import wave from "../../app/assets/Ecosystem/waves.png";
import Image from "next/image";
import "./ecosystem.scss";

const Ecosystem = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      {/* Hero */}
      <Box
        // border={"1px solid red"}
        bgImage={wave}
        position={"relative"}
        zIndex={11111111111111}
        w={{
          base: "fit-content",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        }}
        backgroundPosition="left"
      >
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
            justifyContent={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
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
            //   border={"1px solid red"}
            w={{
              base: "90%",
              sm: "100%",
              md: "90%",
              lg: "80%",
              xl: "80%",
              "2xl": "80%",
            }}
            mt={"100px"}
            mb={{
              base: "20px",
              xsm: "20px",
              sm: "60px",
              md: "106px",
              lg: "106px",
              xl: "106px",
              "2xl": "106px",
            }}
          >
            <Center>
              <Box
                w={{
                  base: "",
                  sm: "80%",
                  md: "80%",
                  lg: "80%",
                  xl: "80%",
                  "2xl": "80%",
                }}
                mb={{
                  base: "20px",
                  xsm: "20px",
                  sm: "25px",
                  md: "25px",
                  lg: "30px",
                  xl: "35px",
                  "2xl": "40px",
                }}
                color={"brand.100"}
              >
                <Text
                  fontSize={{
                    base: "30px",
                    sm: "30px",
                    md: "60px",
                    lg: "60px",
                    xl: "60px",
                    "2xl": "60px",
                  }}
                  fontWeight={"bold"}
                  className="textTitle"
                >
                  Join The USDAO Collaborative{" "}
                  <span
                    style={{
                      background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {" "}
                    Ecosystem
                  </span>
                </Text>
                {/* <Text
                  fontSize={"16px"}
                  w={{
                    base: "90%",
                    sm: "100%",
                    md: "70%",
                    lg: "70%",
                    xl: "70%",
                    "2xl": "70%",
                  }}
                  mt={"30px"}
                  mb={"50px"}
                >
                  Explore apps and services using USDAO Stablecoin & Discover
                  our network of esteemed community and technology partners
                  driving innovation and growth in the realm of cryptocurrency
                  and blockchain technology.
                </Text> */}
                <Button
                  bgGradient="linear(to-l, #FEBC18, #FF3934)"
                  w={"224px"}
                  display={"flex"}
                  className="textButton"
                  h={"66px"}
                  fontSize={"20px"}
                  color={"brand.100"}
                  p={"21px 43px 21px 43px"}
                  borderRadius={"40px"}
                  _hover={{ borderColor: "#FEBC18" }}
                  onClick={() => {
                    window.open("https://docs.usdao.io/usdao");
                  }}
                >
                  Discover More
                </Button>
              </Box>
            </Center>
            <Box
              w={{
                base: "90%",
                xsm: "90%",
                sm: "70%",
                md: "70%",
                lg: "70%",
                xl: "70%",
                "2xl": "70%",
              }}
            >
              <Image src={hero} width={"100%"} />
            </Box>
          </Box>
        </Center>
      </Box>

      {/* Community Partners */}

      <Center>
        <Box
          // border={"1px solid red"}
          color={"white"}
          display={"flex"}
          justifyContent="center"
          flexDirection="column"
          alignItems={"center"}
          mb={{
            base: "10px",
            sm: "10px",
            md: "110px",
            lg: "110px",
            xl: "110px",
            "2xl": "110px",
          }}
        >
          <Text
            mt={{
              base: "20px",
              sm: "20px",
              md: "110px",
              lg: "110px",
              xl: "110px",
              "2xl": "110px",
            }}
            mb={"20px"}
            fontSize={{
              base: "40px",
              sm: "40px",
              md: "60px",
              lg: "60px",
              xl: "60px",
              "2xl": "60px",
            }}
            textAlign={"center"}
          >
            <span
              style={{
                background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Community
            </span>{" "}
            Partners
          </Text>
          {/* <Text
            fontSize={"16px"}
            textAlign={"center"}
            w={{
              base: "100%",
              sm: "100%",
              md: "50rem",
              lg: "70rem",
              xl: "70rem",
              "2xl": "70rem",
            }}
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

      {/* Patners Logo */}
      <Center>
        {/* <Box border={"1px solid red"}> */}
        <Box
          position={"relative"}
          display={{
            base: "block",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
          h={"fit-content"}
          // border={"1px solid red"}
        >
          {/* left */}
          <Box
            position={"absolute"}
            top={{
              base: "20rem",
              xsm: "25rem",
              sm: "5rem",
              md: "5rem",
              lg: "8rem",
              xl: "10rem",
              "2xl": "20rem",
            }}
            left={{
              base: "4rem",
              xsm: "5rem",
              sm: "5rem",
              md: "5rem",
              lg: "8rem",
              xl: "10rem",
              "2xl": "20rem",
            }}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={serri} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={{
              base: "4rem",
              xsm: "5rem",
              sm: "5rem",
              md: "5rem",
              lg: "16rem",
              xl: "20rem",
              "2xl": "20rem",
            }}
            left={{
              base: "4rem",
              xsm: "5rem",
              sm: "15rem",
              md: "15rem",
              lg: "16rem",
              xl: "20rem",
              "2xl": "20rem",
            }}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={fibit} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={{
              base: "20rem",
              xsm: "25rem",
              sm: "5rem",
              md: "5rem",
              lg: "16rem",
              xl: "20rem",
              "2xl": "20rem",
            }}
            left={{
              base: "-4rem",
              xsm: "-5rem",
              sm: "15rem",
              md: "15rem",
              lg: "16rem",
              xl: "20rem",
              "2xl": "20rem",
            }}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={fibit} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={{
              base: "12rem",
              xsm: "15rem",
              sm: "10rem",
              md: "10rem",
              lg: "8rem",
              xl: "10rem",
              "2xl": "10rem",
            }}
            left={{
              base: "4rem",
              xsm: "5rem",
              sm: "10rem",
              md: "10rem",
              lg: "24rem",
              xl: "30rem",
              "2xl": "30rem",
            }}
            // right={"-10rem"}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={taskon} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          {/* right */}
          <Box
            position={"absolute"}
            top={{
              base: "16rem",
              xsm: "20rem",
              sm: "10rem",
              md: "5rem",
              lg: "8rem",
              xl: "10rem",
              "2xl": "10rem",
            }}
            right={{
              base: "0rem",
              sm: "10rem",
              md: "15rem",
              lg: "8rem",
              xl: "10rem",
              "2xl": "10rem",
            }}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={punedao} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={{
              base: "4rem",
              xsm: "5rem",
              sm: "5rem",
              md: "5rem",
              lg: "16rem",
              xl: "20rem",
              "2xl": "20rem",
            }}
            right={{
              base: "4rem",
              xsm: "5rem",
              sm: "5rem",
              md: "5rem",
              lg: "16rem",
              xl: "20rem",
              "2xl": "20rem",
            }}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={threeway} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={{
              base: "12rem",
              xsm: "15rem",
              sm: "5rem",
              md: "10rem",
              lg: "8rem",
              xl: "10rem",
              "2xl": "10rem",
            }}
            right={{
              base: "4rem",
              xsm: "5rem",
              sm: "15rem",
              md: "10rem",
              lg: "24rem",
              xl: "30rem",
              "2xl": "30rem",
            }}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={cred} className="partnerImg" width={"50%"} />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={{
              base: "8rem",
              xsm: "10rem",
              sm: "10rem",
              md: "10rem",
              lg: "16rem",
              xl: "20rem",
              "2xl": "20rem",
            }}
            left={0}
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"10px"}
                right={"10px"}
                left={"20px"}
              >
                <Image src={dao} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          <Box
            bg={"#1D1C23"}
            w={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            h={{
              base: "80px",
              xsm: "100px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "200px",
              "2xl": "200px",
            }}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"1px"}
                right={"5px"}
                left={"10px"}
              >
                <Image src={web} className="partnerImg" width={"70%"} />
              </Box>
            </Center>
          </Box>
          {/* </Box> */}
        </Box>
        {/* </Box> */}
      </Center>

      {/* Technology Partner */}

      <Center>
        <Box
          color={"white"}
          display={"flex"}
          justifyContent="center"
          flexDirection="column"
          alignItems={"center"}
          mb={"110px"}
          position={"relative"}
          top={{
            base: "20rem",
            xsm: "20rem",
            sm: "7rem",
            md: "10rem",
            lg: "20rem",
            xl: "20rem",
            "2xl": "20rem",
          }}
        >
          <Text
            mt={"110px"}
            mb={"20px"}
            fontSize={{
              base: "30px",
              sm: "30px",
              md: "60px",
              lg: "60px",
              xl: "60px",
              "2xl": "60px",
            }}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            <span
              style={{
                background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technology
            </span>{" "}
            Partners
          </Text>
          {/* <Text
            fontSize={"16px"}
            textAlign={"center"}
            w={{
              base: "100%",
              xsm: "100%",
              sm: "80%",
              md: "50rem",
              lg: "70rem",
              xl: "70rem",
              "2xl": "70rem",
            }}
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
          position={"relative"}
          top={{
            base: "15rem",
            xsm: "15rem",
            sm: "3rem",
            md: "10rem",
            lg: "20rem",
            xl: "20rem",
            "2xl": "20rem",
          }}
          //   left={0}
          bg={"#1D1C23"}
          w={"200px"}
          h={"200px"}
          transform="rotate(45deg)"
          borderRadius={"10px"}
        >
          <Center>
            <Box
              transform={"rotate(-45deg)"}
              position={"relative"}
              top={"10px"}
              right={"10px"}
              left={"20px"}
            >
              <Image src={gfuture} className="partnerImg" width={"70%"} />
            </Box>
          </Center>
        </Box>
      </Center>

      {/* Core USDAO Protocol Team */}

      <Box
        position={"relative"}
        top={{
          base: "11rem",
          xsm: "200px",
          sm: "50px",
          md: "10rem",
          lg: "20rem",
          xl: "20rem",
          "2xl": "20rem",
        }}
      >
        <Center>
          <Box
            color={"white"}
            display={"flex"}
            justifyContent="center"
            flexDirection="column"
            alignItems={"center"}
            mb={"110px"}
          >
            <Text
              mt={"110px"}
              mb={"20px"}
              fontSize={{
                base: "30px",
                sm: "30px",
                md: "60px",
                lg: "60px",
                xl: "60px",
                "2xl": "60px",
              }}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Core USDAO
              <span
                style={{
                  background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Protocol
              </span>{" "}
              Team
            </Text>
            {/* <Text
              fontSize={"16px"}
              textAlign={"center"}
              w={{
                base: "100%",
                sm: "100%",
                md: "50rem",
                lg: "70rem",
                xl: "70rem",
                "2xl": "70rem",
              }}
              color={"#A1A1A1"}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </Text> */}
          </Box>
        </Center>
      </Box>

      <Center>
        <Box
          //   mb={"100px"}
          position={"relative"}
          top={{
            base: "100px",
            xsm: "200px",
            sm: "50px",
            md: "10rem",
            lg: "20rem",
            xl: "20rem",
            "2xl": "20rem",
          }}
          //   left={0}
          bg={"#1D1C23"}
          w={"200px"}
          h={"200px"}
          transform="rotate(45deg)"
          borderRadius={"10px"}
        >
          <Center>
            <Box
              transform={"rotate(-45deg)"}
              position={"relative"}
              top={"10px"}
              right={"10px"}
              left={"20px"}
            >
              <Image src={labs196} className="partnerImg" w={"70%"} />
            </Box>
          </Center>
        </Box>
      </Center>

      {/* contributors */}

      <Center className="mb-5">
        <Box
          position={"relative"}
          top={{
            base: "100px",
            xsm: "200px",
            sm: "100px",
            md: "10rem",
            lg: "20rem",
            xl: "20rem",
            "2xl": "20rem",
          }}
          color={"white"}
          display={"flex"}
          justifyContent="center"
          flexDirection="column"
          alignItems={"center"}
          mb={"250px"}
          w={{
            base: "100%",
            sm: "100%",
            md: "50rem",
            lg: "70rem",
            xl: "70rem",
            "2xl": "70rem",
          }}
        >
          <Center>
            <Text
              mt={"110px"}
              mb={"20px"}
              fontSize={{
                base: "30px",
                sm: "30px",
                md: "60px",
                lg: "60px",
                xl: "60px",
                "2xl": "60px",
              }}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Want to{" "}
              <span
                style={{
                  background: "linear-gradient(to left, #FEBC18, #FF3934 )",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                contribute
              </span>{" "}
              to the USDAO ecosystem?{" "}
            </Text>
          </Center>
          <Text
            fontSize={"16px"}
            textAlign={"center"}
            w={{
              base: "80%",
              sm: "80%",
              md: "50rem",
              lg: "70rem",
              xl: "70rem",
              "2xl": "70rem",
            }}
            color={"#A1A1A1"}
          >
            The go-to resource for developers to start building with USDAO.
          </Text>
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
        </Box>
      </Center>
    </>
  );
};

export default Ecosystem;
