import { Text, Box } from "@chakra-ui/react";

export default function AboutUs({ language }) {
  return (
    <Box py={10} px={50} height="100vh">
      <p>
        <Text fontSize="xl" color="white">
          Fork DAO is establishing itself as a web3 aggregator.
        </Text>
      </p>
      <p>
        <Text fontSize="xl" color="white">
          We currently interact, play, learn and challenge procolos such as PoH,
          Kleros, UBI, Lens, Prode, among others.
        </Text>
      </p>

      <p>
        <Text fontSize="2xl" color="white" py={5}>
          Joy, integrations and decentralization are our main values.
        </Text>
      </p>

      <p>
        <Text fontSize="2xl" color="white" py={5}>
          Why Fork?
        </Text>
      </p>

      <p>
        <Text fontSize="xl" color="white" py={5}>
          In software, we often hear about a fork as a way to take some system
          and adapt, transform or improve some things at your please.
        </Text>
      </p>

      <p>
        <Text fontSize="xl" color="white" py={5}>
          Our community has born in that way. It all started with a Proof Of
          Humanity telegram channel fork. It was just about communication. Now
          we try to learn and challenge any protocol that we use as users and
          consumers.
        </Text>
      </p>

      <p>
        <Text fontSize="xl" color="white" py={5}>
          Every protocol in web3 needs an end user. And the end user need a
          public square where he/she can meet with his equals and fight for
          better features and environments.
        </Text>
      </p>

      <p>
        <Text fontSize="xl" color="white" py={5}>
          So.. &quot;Fork&quot; is because every open protocol can get a
          potential fork if it don&apos;t match users expectatives. It&apos;s
          not good, but we want to be there to learn and explode all the
          benefits of this emerging ecosystem.
        </Text>
      </p>
    </Box>
  );
}
