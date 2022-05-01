require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Littlz";
const description = "4567 Littlz raom Littlton. A small town on a tiny planey in the Scribblverse. 50% goes back to holders";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 900,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Headwear" },
    ],
  },{
    growEditionSizeTo: 1100,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Mouth" },
    ],
  },{
    growEditionSizeTo: 1110,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "PBJ" },
      { name: "Verified"}
    ],
  },{
    growEditionSizeTo: 1160,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "PBJ" },
      { name: "PBJ Mouth"}
    ],
  },{
    growEditionSizeTo: 1200,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Frog Suit" },
      { name: "Frog Suit Mouth" },

    ],
  },{
    growEditionSizeTo:1205,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Frog Suit" },
      { name: "Verified" },

    ],
  },{
    growEditionSizeTo: 1305,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Spacesuits" },

    ],
  },{
    growEditionSizeTo: 1550,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Special Characters" },
      { name: "Eyes" },
      { name: "Mouth" },
    ],
  },{
    growEditionSizeTo: 1620,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head" },
      { name: "Vikings" },
      { name: "Eyes" },
      { name: "Mouth" },
    ],
  },{
    growEditionSizeTo: 1625,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head" },
      { name: "Vikings" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Verified" },

    ],
  },{
    growEditionSizeTo: 1800,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Mummy" },
      { name: "Eyes" },
      { name: "Mouth" },
    ],
  },{
    growEditionSizeTo: 1805,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Mummy" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Verified"},
    ],
  },{
    growEditionSizeTo: 1870,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Knights" },
      { name: "Eyes" },
      { name: "Mouth" },
    ],
  },{
    growEditionSizeTo: 1875,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Knights" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Verified"},
    ],
  },{
    growEditionSizeTo: 1925,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Witches" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Earrings"},
    ],
  },{
    growEditionSizeTo: 1930,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Witches" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Verified"}
    ],
  },{
    growEditionSizeTo: 2250,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Headwear"},
      { name: "Earrings"}
    ],
  },{
    growEditionSizeTo: 4567,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Headwear" },
    ],
  }
];

const shuffleLayerConfigurations = true;

const debugLogs = true;

const format = {
  width: 2000,
  height: 2000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://linktr.ee/thelittlz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Littlz';
const CONTRACT_SYMBOL = 'LIT';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x6c26BF40072DBca488663000190Af605BcB0eE7E';
const TREASURY_ADDRESS = '0x6c26BF40072DBca488663000190Af605BcB0eE7E';
const MAX_SUPPLY = 4567; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 6; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 15; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-05-07T15:00:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x6c26BF40072DBca488663000190Af605BcB0eE7E"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x32388fA29B48195f7520ee1D98b6502Ed7b65780"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = null; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = null; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = null;
// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
