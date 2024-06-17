import cred from "../../assets/img/cred.svg";
import { Box, Text, Center, Button } from "@chakra-ui/react";
import "./partner.scss";
import Image from "next/image";

const Partner = () => {
  return (
    <div>
      <Center>
        <Box position={"relative"}>
          {/* 1 */}
          <Box
            position={"absolute"}
            top={"4rem"}
            right={"26rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"1.5rem"}
                right={"1rem"}
                left={"1.5rem"}
              >
                <div className="PatnerSectionHeadinvest">
                  <p>Investors</p>
                </div>
              </Box>
            </Center>
          </Box>
          {/* 2 */}
          <Box
            position={"absolute"}
            top={"4rem"}
            right={"11rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="1" />
              </Box>
            </Center>
          </Box>
          {/* 3 */}
          <Box
            position={"absolute"}
            top={"4rem"}
            right={"-4rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="2" />
              </Box>
            </Center>
          </Box>
          {/* 4 */}
          <Box
            position={"absolute"}
            top={"4rem"}
            left={"9rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="3" />
              </Box>
            </Center>
          </Box>
          {/* 5 */}
          <Box
            position={"absolute"}
            top={"4rem"}
            left={"24rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="4" />
              </Box>
            </Center>
          </Box>

          {/* ======= Center section======= */}

          {/* 1 */}
          <Box
            position={"absolute"}
            top={"14rem"}
            left={"1.5rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="5" />
              </Box>
            </Center>
          </Box>
          {/* 2 */}
          <Box
            position={"absolute"}
            top={"14rem"}
            left={"16rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="6" />
              </Box>
            </Center>
          </Box>
          {/* 3 */}
          <Box
            position={"absolute"}
            top={"14rem"}
            left={"31rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="7" />
              </Box>
            </Center>
          </Box>
          {/* 4 */}
          <Box
            position={"absolute"}
            top={"14rem"}
            right={"3.5rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="8" />
              </Box>
            </Center>
          </Box>
          {/* 5 */}
          <Box
            position={"absolute"}
            top={"14rem"}
            right={"18.5rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"1.5rem"}
                right={"1rem"}
                left={"1.5rem"}
              >
                <div className="PatnerSectionHeadSecurity">
                  <p>Security</p>
                </div>
              </Box>
            </Center>
          </Box>

          {/* =======Bottom section========= */}
          <Box
            position={"absolute"}
            top={"24rem"}
            right={"26rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"1.5rem"}
                right={"1rem"}
                left={"1.5rem"}
              >
                <div className="PatnerSectionHeadColl">
                  <p>Collaboration</p>
                </div>
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={"24rem"}
            right={"11rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="9" />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={"24rem"}
            right={"-4rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="10" />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={"24rem"}
            left={"9rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="11" />
              </Box>
            </Center>
          </Box>
          <Box
            position={"absolute"}
            top={"24rem"}
            left={"24rem"}
            bg={"#1D1C23"}
            w={"160px"}
            h={"160px"}
            transform="rotate(45deg)"
            borderRadius={"10px"}
          >
            <Center>
              <Box
                transform={"rotate(-45deg)"}
                position={"relative"}
                top={"4px"}
                right={"2px"}
                left={"2px"}
              >
                <Image src={cred} style={{ width: "80%" }} alt="12" />
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </div>
  );
};

export default Partner;
