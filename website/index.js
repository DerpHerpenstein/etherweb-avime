let og = window.parent.og;

const linageeIcon = `<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">	.st0{fill:#FFFFFF;}</style><path class="st0" d="m219.24 361.19c-0.188 0.343-0.501 1.061 0.054 2.023 0.612 1.06 1.502 1.06 1.837 1.06l35.18 3e-3 130.02-225.21c5.879-10.184 6.424-22.159 1.635-32.675-5.934-13.029-19.263-21.099-33.58-21.099h-118.45v0.035c-8.793 0.366-16.252 7.211-16.642 16.065-0.423 9.591 7.172 17.504 16.642 17.618v0.011h13.354l-146.6 253.92c-6.687 11.583-6.473 25.484 0.641 36.919 6.626 10.65 18.535 16.856 31.078 16.856h200.93c8.657 0 16.252-6.341 17.202-14.946 1.123-10.173-6.813-18.784-16.759-18.784h-202.05c-0.335 0-1.224 0-1.837-1.06-0.612-1.06-0.167-1.83 0-2.12l156.23-270.78h67.151c0.335 0 1.224 0 1.837 1.06 0.612 1.06 0.167 1.83 0 2.12l-137.88 238.99z"/></svg>`;

const s01Abi = [ { "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCardHash", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "reqTokenId", "type": "uint256" } ], "name": "getTrait", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTraitHashes", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "traitType", "type": "uint8" } ], "name": "getTraitName", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "lock", "type": "uint8" } ], "name": "lockTraits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "packs", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "newBaseURI", "type": "string" } ], "name": "updateBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "cHash", "type": "uint256" } ], "name": "updateCardHash", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "traitType", "type": "uint8" }, { "internalType": "uint256", "name": "tHash", "type": "uint256" } ], "name": "updateTraitHash", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string[6]", "name": "name", "type": "string[6]" }, { "internalType": "string[6]", "name": "description", "type": "string[6]" }, { "internalType": "string[6]", "name": "thumb", "type": "string[6]" }, { "internalType": "string[6]", "name": "card", "type": "string[6]" } ], "name": "uploadCard", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string[15]", "name": "name", "type": "string[15]" }, { "internalType": "string[15]", "name": "description", "type": "string[15]" }, { "internalType": "string[15]", "name": "thumb", "type": "string[15]" }, { "internalType": "string[15]", "name": "male", "type": "string[15]" }, { "internalType": "string[15]", "name": "female", "type": "string[15]" } ], "name": "uploadTrait", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];


const fusionAbi = [ { "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "hash", "type": "bytes32" } ], "name": "checkAvimeHash", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "avimeId", "type": "uint256" } ], "name": "getAvime", "outputs": [ { "components": [ { "internalType": "uint8[6]", "name": "contractId", "type": "uint8[6]" }, { "internalType": "uint16[6]", "name": "traitId", "type": "uint16[6]" }, { "internalType": "uint8", "name": "sex", "type": "uint8" } ], "internalType": "struct AVIME_FUSION.Avime", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "avimeStart", "type": "uint256" }, { "internalType": "uint256", "name": "avimeFinish", "type": "uint256" } ], "name": "getAvimeBatch", "outputs": [ { "components": [ { "internalType": "uint8[6]", "name": "contractId", "type": "uint8[6]" }, { "internalType": "uint16[6]", "name": "traitId", "type": "uint16[6]" }, { "internalType": "uint8", "name": "sex", "type": "uint8" } ], "internalType": "struct AVIME_FUSION.Avime[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "contractId", "type": "uint8" } ], "name": "getAvimeContract", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint8[6]", "name": "contractIds", "type": "uint8[6]" }, { "internalType": "uint16[6]", "name": "traitIds", "type": "uint16[6]" } ], "name": "getAvimeHash", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "lock", "type": "uint8" } ], "name": "lockContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint8[]", "name": "contractIds", "type": "uint8[]" }, { "internalType": "uint16[]", "name": "traitIds", "type": "uint16[]" }, { "internalType": "uint8", "name": "sex", "type": "uint8" } ], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "reqTokenId", "type": "uint256" } ], "name": "tokenData", "outputs": [ { "components": [ { "internalType": "uint8[6]", "name": "contractId", "type": "uint8[6]" }, { "internalType": "uint16[6]", "name": "traitId", "type": "uint16[6]" }, { "internalType": "uint8", "name": "sex", "type": "uint8" } ], "internalType": "struct AVIME_FUSION.Avime", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "contractId", "type": "uint8" }, { "internalType": "address", "name": "contractAddress", "type": "address" } ], "name": "updateAvimeContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "newBaseURI", "type": "string" } ], "name": "updateBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];

const s01Address = '0xBe19793179c787f5d268e5e13C99CB735703c086'; // MAINNET  S01 Address
const s00Address = '0x10fE2787a8a8d191fB4389A71083Fc0CC2dC1E35'; // MAINNET  S00 ADDRESS
const fusionAddress = '0xd92Cc219AcF2199DeadAC2b965B35B9e84FA7F0A'; // MAINNET  FUSION Address

let fusionContract = new og.ethers.Contract(fusionAddress, fusionAbi, og.signer);
let s01Contract = new og.ethers.Contract(s01Address, s01Abi, og.signer);
let s00Contract = new og.ethers.Contract(s00Address, s01Abi, og.signer);
let walletAddress = "";



let newContent = true;

let traitTypeName = ["Background", "Body", "Face", "Clothes", "Hair", "Accessory"];

let avimeData = {
  s00Data: undefined,
  s01Supply: undefined,
  fusionSupply: undefined,
  s01Data: undefined,
  wardrobeAvime: {
    contractId: [1,1,1,1,1,1],
    sex: 0,
    traitId: [undefined,undefined,undefined,undefined,undefined,undefined],
    traitNumber: [undefined,undefined,undefined,undefined,undefined,undefined]
  }
}

async function getSeasonData(season){
  try{
    let traitHashes;
    let cardHash;
    switch(season){
      case 0: traitHashes = await s00Contract.getTraitHashes();
              cardHash = await s00Contract.getCardHash();
              break;
      default:  traitHashes = await s01Contract.getTraitHashes();
                cardHash = await s01Contract.getCardHash();

    }
     let seasonData = {
       traitName: [],
       traitDesc: [],
       traitThumb: [],
       traitMale: [],
       traitFemale: [],
       traitHashes: [],
       cardName: [],
       cardDesc: [],
       cardThumb: [],
       cardData: [],
     };

     seasonData.traitHashes = traitHashes;

    let hashHex;
    let tx;
    let params;
    let iface = new og.ethers.utils.Interface(s01Abi);

    for(var i =0; i < 6; i++){
      hashHex = og.ethers.utils.hexZeroPad(traitHashes[i].toHexString(), 32);
      tx = await og.provider.getTransaction(hashHex);
      let decodedData = iface.parseTransaction({ data: tx.data, value: tx.value });
      params = decodedData.args;
      seasonData.traitName.push(params[0]);
      seasonData.traitDesc.push(params[1]);
      seasonData.traitThumb.push(params[2]);
      seasonData.traitMale.push(params[3]);
      seasonData.traitFemale.push(params[4]);
    }
    hashHex = og.ethers.utils.hexZeroPad(cardHash.toHexString(), 32);
    tx = await og.provider.getTransaction(hashHex);

    let decodedData = iface.parseTransaction({ data: tx.data, value: tx.value });
    params = decodedData.args;
    seasonData.cardName = params[0];
    seasonData.cardDesc = params[1];
    seasonData.cardThumb = params[2];
    seasonData.cardImg = params[3];
    return seasonData;
  }
  catch(err){
    console.log(err.message);
  }
}

async function generateTraitCard(traitId, season, currentSeasonData, thumbnailOnly){
  try{
    let currentTrait = -1;
    let currentTraitType = -1;
    switch(season){
      case -1:
            // to generate a random s01 card, pass a season of -1
            // if you want to generate a specific type, pass the number 0-5 to traitId
            currentTrait = getRandomInt(0,14);
            if(traitId == -1)
              currentTraitType = getRandomInt(0,5);
            else
              currentTraitType =traitId;
            break;
      case 0: 
              break;
      case 1: currentTrait = (await s01Contract.getTrait(traitId));
              currentTraitType = traitId%6; 
              break;
    }
    if(thumbnailOnly)
      return {traitNumber: currentTrait, thumbnail: `<svg viewBox="0 0 43 43"><image xlink:href="${currentSeasonData.traitThumb[currentTraitType][currentTrait]}"/></svg>`};

    let titleSvg = `
      <svg width="362" height="361" viewBox="0 0 362 361" x="18" y="20">
        <text x="5" y="28" text-anchor="left" letter-spacing="-1.7" font-family="Courier" font-size="16px" fill="#000">${currentSeasonData.traitName[currentTraitType][currentTrait]}</text>
    `;

    let words = currentSeasonData.traitDesc[currentTraitType][currentTrait].split(" ");
    let totalChars = 0;
    let yLoc =244;
    for(let i=0; i<words.length; i++){
      totalChars += words[i].length;
      if(totalChars > 38){
        let line = words.slice(0,i).join(' ');

        for(let j=0; j< i; j++)
          words[j] = "";

        titleSvg += `<text x="5" y="${yLoc}" text-anchor="left" letter-spacing="-1.7" font-family="Courier" font-size="14px" fill="#000">
                        <tspan x="5">${line}</tspan>
                     </text>`;
        yLoc += 15;
        totalChars = 0;
      }
    }

    titleSvg += `<text x="5" y="${yLoc}" text-anchor="left" letter-spacing="-1.7" font-family="Courier" font-size="15px" fill="#000">
                    <tspan x="5">${words.join(' ')}</tspan>
                  </text>`;

    titleSvg += `<text x="274" y="330" width="200" text-anchor="middle" letter-spacing="-1.7" dominant-baseline="middle" font-family="Courier" font-size="11px"          
                fill="#000">${"ID: " + traitId}</text>
                </svg>`;

    let finalSVG = `<svg width="362" height="361" viewBox="0 0 362 361">`;
    if(currentTraitType != 0){
      
      let cardSVG = `<image xlink:href="${currentSeasonData.cardImg[currentTraitType]}" width="362" height="361"/>`;
      let maleTraitSVG = `<image xlink:href="${currentSeasonData.traitMale[currentTraitType][currentTrait]}" y="76" x="180"/>`;
      let femaleTraitSVG = `<image xlink:href="${currentSeasonData.traitFemale[currentTraitType][currentTrait]}" y="76" x="20"/>`;
      let thumbTraitSVG = `<image xlink:href="${currentSeasonData.traitThumb[currentTraitType][currentTrait]}" y="20" x="298"/>`;
      finalSVG += cardSVG + titleSvg + maleTraitSVG + femaleTraitSVG + thumbTraitSVG + "</svg>";
      
    }
    else{
      let cardSVG = `<image xlink:href="${currentSeasonData.cardImg[currentTraitType]}" width="362" height="361"/>`;
      let maleTraitSVG = `<image xlink:href="${currentSeasonData.traitMale[currentTraitType][currentTrait]}" y="76" x="101"/>`;
      let thumbTraitSVG = `<image xlink:href="${currentSeasonData.traitThumb[currentTraitType][currentTrait]}" y="20" x="298"/>`;
      finalSVG += cardSVG + titleSvg + maleTraitSVG + thumbTraitSVG + "</svg>";
    }
    return finalSVG;
  }
  catch(err){
    console.log(err.message);
  }
}

async function generateAvime(currentAvimeId, specificAvime){
  try{
    let currentAvime = undefined;
    if(specificAvime == undefined)
      currentAvime = await fusionContract.getAvime(currentAvimeId);
    else{
      currentAvime = JSON.parse(JSON.stringify(specificAvime));
      currentAvime.traitId = currentAvime.traitNumber;
    }
    let traitInfo = [];
    let currentTrait;
    let currentTraitType;
    let traitHash;
    let avimeInnerSVG = "";
    let avimeSex = currentAvime.sex ? "traitMale": "traitFemale"; 

    for(var i = 0; i < 6; i++){
      switch(parseInt(currentAvime.contractId[i])) {
        case 0: currentTrait = await s00Contract.getTrait(parseInt(currentAvime.traitId[i]));
                currentTraitType = parseInt(parseInt(currentAvime.traitId[i]))%6;
                traitHash = og.ethers.utils.hexZeroPad(avimeData.s00Data.traitHashes[currentTraitType].toHexString(), 32);
                traitInfo.push({});
                traitInfo[i].traitType = currentTraitType;
                traitInfo[i].traitName = avimeData.s00Data.traitName[currentTraitType][currentTrait];
                traitInfo[i].traitNumber = currentTrait;
                traitInfo[i].traitDesc = avimeData.s00Data.traitDesc[currentTraitType][currentTrait];
                traitInfo[i].traitTypeName = traitTypeName[currentTraitType];
                traitInfo[i].traitTxHash = traitHash;
                traitInfo[i].trait_type = traitTypeName[currentTraitType];
                traitInfo[i].value = avimeData.s00Data.traitName[currentTraitType][currentTrait];
                if(currentTraitType==0)
                  avimeInnerSVG += `<image xlink:href="${avimeData.s00Data.traitMale[currentTraitType][currentTrait]}"/>`;
                avimeInnerSVG += `<image xlink:href="${avimeData.s00Data[avimeSex][currentTraitType][currentTrait]}"/>`;
                break;

        case 1: if(specificAvime == undefined){
                  currentTrait = await s01Contract.getTrait(parseInt(currentAvime.traitId[i]));
                  currentTraitType = parseInt(parseInt(currentAvime.traitId[i]))%6;
                }
                else{
                  currentTrait = currentAvime.traitId[i];
                  currentTraitType = i;
                }
                traitHash = og.ethers.utils.hexZeroPad(avimeData.s01Data.traitHashes[currentTraitType].toHexString(), 32);
                traitInfo.push({});
                traitInfo[i].traitType = currentTraitType;
                traitInfo[i].traitName = avimeData.s01Data.traitName[currentTraitType][currentTrait];
                traitInfo[i].traitNumber = currentTrait;
                traitInfo[i].traitDesc = avimeData.s01Data.traitDesc[currentTraitType][currentTrait];
                traitInfo[i].traitTypeName = traitTypeName[currentTraitType];
                traitInfo[i].traitTxHash = traitHash;
                traitInfo[i].trait_type = traitTypeName[currentTraitType];
                traitInfo[i].value = avimeData.s01Data.traitName[currentTraitType][currentTrait];
                if(currentTraitType==0)
                  avimeInnerSVG += `<image xlink:href="${avimeData.s01Data.traitMale[currentTraitType][currentTrait]}"/>`;
                avimeInnerSVG += `<image xlink:href="${avimeData.s01Data[avimeSex][currentTraitType][currentTrait]}"/>`;
                break;
      }
    }

    let unique = { trait_type: "Fusion Status", value: ""};
    let aviHash = await fusionContract.getAvimeHash(currentAvime.sex, currentAvime.contractId, currentAvime.traitId);
    let uniqueAvimeId = await fusionContract.checkAvimeHash(aviHash);
    let isUnique = uniqueAvimeId==currentAvimeId ? "Original" : "Duplicate of #" + uniqueAvimeId;
    unique.value = isUnique;
    traitInfo.push(unique);

    let finalObj = {
      sex: currentAvime.sex,
      contractId: currentAvime.contractId,
      traits: traitInfo,
      svg: `<svg viewBox="0 0 160 160">${avimeInnerSVG}</svg>`,
      div:`
        <div style="width: 320px; height: 320px; image-rendering: pixelated;">
          <svg viewBox="0 0 160 160">
            ${avimeInnerSVG}
          </svg>
        </div>`
    }
    return finalObj;
  }
  catch(err){
    console.log(err.message);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function updateRandomAvime(){
  $("#random_avime").html( (await generateAvime(getRandomInt(1,300))).div );
  $("#random_trait_background").html(await generateTraitCard(0,-1,avimeData.s01Data));
  $("#random_trait_body").html(await generateTraitCard(1,-1,avimeData.s01Data));
  $("#random_trait_clothes").html(await generateTraitCard(2,-1,avimeData.s01Data));
  $("#random_trait_face").html(await generateTraitCard(3,-1,avimeData.s01Data));
  $("#random_trait_hair").html(await generateTraitCard(4,-1,avimeData.s01Data));
  $("#random_trait_accessory").html(await generateTraitCard(5,-1,avimeData.s01Data));
  setTimeout(updateRandomAvime, 1000);
}

async function updateUserData(){

}

async function updateUI(){
  if(newContent){
    await updateUserData();
    newContent = false;
  }
  let tmpAddress = await og.signer.getAddress();
  if(walletAddress !== tmpAddress){
    await setupUI();
  }
  setTimeout(updateUI,500);
}

$(document).on('click', '.derp_link',async function (){
  og.redirect($(this).attr("data"));
});

$(document).on('click', '#mint_avime_button', async function(){
  try{
    const selected = $("#mint_count_select").find(":selected").text();
    const cost = ["0", "0.09", "0.18", "0.27", "0.36", "0.45","0.54","0.63","0.72","0.81","0.9"]
    const options = {value: og.ethers.utils.parseEther(cost[parseInt(selected)] )};

    const submittedTx = await s01Contract.mint(selected, options);
    const txReceipt = await submittedTx.wait();
      if (txReceipt.status === 0)
          throw new Error("Approve transaction failed");
  }
  catch(e){
    $("#modal_title").html("Error - Mint Failed");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});

async function updateFusedWallet(fusionBalance){
  $("#wallet_avime").html("");
  if(fusionBalance == 0){
    $("#wallet_avime").html("You don't have any Avime");
  }
  for(let i=0; i< fusionBalance; i++){
    let currentAvimeId = await fusionContract.tokenOfOwnerByIndex(walletAddress,i);
    let currentAvime = await generateAvime(currentAvimeId);
    $("#wallet_avime").append(`
      <div class="m-2 is-inline-block">
        <div class="avime-border has-text-centered is-inline-block">
          <div class="avime-inner-border">
            <div class="has-text-derk has-text-centered subtitle">Avime #${currentAvimeId}</div>
            ${currentAvime.div}
          </div>
        </div>
      </div>
    `);
  }
}

function populateWardrobe(){
  for(let i=0; i<15; i++){
    for(let j=0; j<6; j++){
      let currentThumbnail = `
        <div traitid="0" traittype="${j}" traitnumber="${i}" class="wardrobe-trait wardrobe-trait-type-${j}  is-inline-block m-2">
          <div class="has-text-centered">#${i}</div>
          <figure class="image is-64x64">
            <img src="${avimeData.s01Data.traitThumb[j][i]}"/>
          </figure>
        </div>`;

        switch(j){
          case 0: $("#wardrobe_background").append(currentThumbnail);
                  break;
          case 1: $("#wardrobe_body").append(currentThumbnail);
                  break;
          case 2: $("#wardrobe_face").append(currentThumbnail);
                  break;
          case 3: $("#wardrobe_clothes").append(currentThumbnail);
                  break;
          case 4: $("#wardrobe_hair").append(currentThumbnail);
                  break;
          case 5: $("#wardrobe_accessory").append(currentThumbnail);
                  break;
        }
    }
  }
}

async function updateCardsWallet(traitsBalance){
  $("#wallet_cards").html("");
  $("#wardrobe_background").html("");
  $("#wardrobe_body").html("");
  $("#wardrobe_clothes").html("");
  $("#wardrobe_face").html("");
  $("#wardrobe_hair").html("");
  $("#wardrobe_accessory").html("");
  if(traitsBalance == 0){
    $("#wallet_cards").html("You don't have any trait cards");
  }

  for(let i=0; i< traitsBalance; i++){
    let currentCardId = await s01Contract.tokenOfOwnerByIndex(walletAddress,i);
    let currentCard = await generateTraitCard(currentCardId, 1, avimeData.s01Data);
    $("#wallet_cards").append(`
      <div class="is-inline-block">${currentCard}</div>
    `);
    let currentThumbnail = await generateTraitCard(currentCardId, 1, avimeData.s01Data, true);
    currentThumbnail = `
      <div traitid="${currentCardId}" traittype="${currentCardId%6} " traitnumber="${currentThumbnail.traitNumber}" class="wardrobe-trait wardrobe-trait-type-${currentCardId%6}  is-inline-block m-2">
        <div class="has-text-centered">#${currentCardId}</div>
        <figure class="image is-64x64">
          ${currentThumbnail.thumbnail}
        </figure>
      </div>`

    switch(currentCardId%6){
      case 0: $("#wardrobe_background").append(currentThumbnail);
              break;
      case 1: $("#wardrobe_body").append(currentThumbnail);
              break;
      case 2: $("#wardrobe_face").append(currentThumbnail);
              break;
      case 3: $("#wardrobe_clothes").append(currentThumbnail);
              break;
      case 4: $("#wardrobe_hair").append(currentThumbnail);
              break;
      case 5: $("#wardrobe_accessory").append(currentThumbnail);
              break;
    }
  }
}



async function setupUI(){
  $("#connectWalletButton").click();
  avimeData.s01Supply = (await s01Contract.totalSupply()).toNumber();
  avimeData.fusionSupply = (await fusionContract.totalSupply()).toNumber();
  $("#mint_s01_counter").text(avimeData.s01Supply/6);
  $("#mint_fusion_counter").text(avimeData.fusionSupply);
  if(avimeData.s01Supply/6 < 10000)
    $("#mint_section").removeClass("is-hidden");
  let fusionBalance = await fusionContract.balanceOf(walletAddress);
  let s01Balance = await s01Contract.balanceOf(walletAddress);
  updateFusedWallet(fusionBalance);
  updateCardsWallet(s01Balance);
  const currentBlock = (await og.provider.getBlockNumber() );
  let approved = await s01Contract.isApprovedForAll(walletAddress, fusionAddress);
  if(!approved)
    $("#avime_fusion_approve_button").prop("disabled",false);
}

$(document).ready(async function(){
  avimeData.s00Data = await getSeasonData(0);
  avimeData.s01Data = await getSeasonData(1);
  //console.log(avimeData);
  await updateRandomAvime();
  await setupUI();
  await updateUI();
});

$(document).on('click', '.avime-faq', async function(){
  let tmpData = $(this).attr("data");
  $("."+tmpData).toggleClass("is-hidden");
});

async function generateWardrobeAvime(){
  let fullAvime = true;
  for(let i=0; i< avimeData.wardrobeAvime.traitId.length; i++){
    if( !(avimeData.wardrobeAvime.traitId[i] > -1))
      fullAvime = false;
  }
  if(fullAvime){
    $("#avime_unique").html('Checking Avime Uniqueness...');
    let avimeDiv = (await generateAvime(undefined, avimeData.wardrobeAvime)).div;
    console.log(avimeData.wardrobeAvime);
    $("#wardrobe_preview").html(avimeDiv);
    $("#avime_fusion_fuse_button").prop("disabled",false);
    let aviHash = await fusionContract.getAvimeHash(avimeData.wardrobeAvime.sex, avimeData.wardrobeAvime.contractId, avimeData.wardrobeAvime.traitId);
    let uniqueAvimeId = await fusionContract.checkAvimeHash(aviHash);
    uniqueAvimeId = uniqueAvimeId.toNumber();
    if(uniqueAvimeId)
      $("#avime_unique").html(`<b style="color:red;">Duplicate of #${uniqueAvimeId}</b>`);
    else
      $("#avime_unique").html(`<b>Unique</b>`);
  }
}

$(document).on('click', '.wardrobe-sex', async function(){
  let tmpData = parseInt($(this).attr("data"));
  $(".wardrobe-sex").addClass("is-light");
  $(this).removeClass("is-light");
  avimeData.wardrobeAvime.sex = tmpData;
  generateWardrobeAvime();
});

$(document).on('click', '.wardrobe-trait', async function(){
  let traitType = parseInt($(this).attr("traittype"));
  let traitId = parseInt($(this).attr("traitid"));
  let traitNumber = parseInt($(this).attr("traitnumber"));
  $(".wardrobe-trait-type-" + traitType).removeClass("selected");
  avimeData.wardrobeAvime.traitNumber[traitType] = traitNumber;
  avimeData.wardrobeAvime.traitId[traitType] = traitId;

  $("#wardrobe_thumb_" + traitType).attr("src", avimeData.s01Data.traitThumb[traitType][traitNumber]);
  generateWardrobeAvime();
  $(this).addClass("selected");
});

$(document).on('click', '#view_avime_button', async function(){
  let avimeInt = parseInt($("#view_avime_input").val());
  let currentAvime = await generateAvime(avimeInt);
  //console.log(currentAvime);
  let traitsDiv = "";
  for(let i=0; i<currentAvime.traits.length; i++){
    // if it is a number trait

    if(parseInt(currentAvime.traits[i].traitType) > -1){
      // if s1 show trait, otherwise for s0 show rare
      let currentTraitThumb = currentAvime.contractId[i] ? avimeData.s01Data.traitThumb[currentAvime.traits[i].traitType][currentAvime.traits[i].traitNumber]:
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAM1BMVEX2uADzkwD51Dr1qQDwdAD1qwDzmAD3xyP40TTvpQHyrDr3xCr2vQHwzTf2whn2vQD1twCCUm7uAAAAvklEQVQ4y43VSQ7CMBBEURsHSAjT/U+L8KBv0XSqa/3U+vLGKceX8im6r12m9QuXbSt1qQ1r6a3JMxQrKNYGdPqGYi21VxPWDVg7xUKLQ7HQviafIwDr0R2K/RsAxbqtUGzuO6SlWiitlmIN3dcfilUBWEmxkmJN69W0YsULzDZGc7UxinVaoViocxUrKVZSrKZY9QKzjdGl2hgdFvp4eXRYrt4dipUUK1uxmmI1xUqK1RSrKdZQLBQb/t/i+wBCTg06KhEMbgAAAABJRU5ErkJggg==";
      traitsDiv +=`
        <div class="card">
          <div class="card-content p-1 m-2">
            <div class="media">
              <div class="media-left">
                <b>${currentAvime.traits[i].traitTypeName}</b>
                <figure class="image is-48x48">
                  <img src="${currentTraitThumb}" alt="">
                </figure>
              </div>
              <div class="media-content" style="overflow:hidden">
                <p class="title is-5">${currentAvime.traits[i].traitName}</p>
                <p class="subtitle is-6">${currentAvime.traits[i].traitDesc}</p>
              </div>
            </div>
          </div>
        </div>`;
    }
    else
      traitsDiv +=`
        <div class="card">
          <div class="card-content p-1 m-2">
            <div class="media">
              <div class="media-content" style="overflow:hidden">
                <p class="title is-5">${currentAvime.traits[i].trait_type}</p>
                <p class="subtitle is-6">${currentAvime.traits[i].value}</p>
              </div>
            </div>
          </div>
        </div>`;

  }

  let finalDiv = `
    <div class="columns is-multiline">
      <div class="column is-6">
        <div class="title has-text-dark">Avime #${avimeInt}</div>
        <div class="is-inline-block has-text-centered">
          ${currentAvime.div}
        </div>
      </div>
      <div class="column is-6">
        ${traitsDiv}
      </div>
    </div>
    `
  $("#view_avime_div").html(finalDiv);
  $("#view_avime_section").removeClass("is-hidden");
});

$(document).on('click', '.wardrobe-select', async function(){
  let tmpData = $(this).attr("data");
  $(".wardrobe-select").removeClass("is-active");
  $(this).addClass("is-active");
  $(".wardrobe-item").addClass("is-hidden");
  $("#"+tmpData).removeClass("is-hidden");
});

$(document).on('click', '.menu-item', async function(){
  $("#main_navbar").toggleClass("is-active");
  let tmpData = $(this).attr("data");
  $(".main_content").addClass("is-hidden");
  $("#"+tmpData).removeClass("is-hidden");
});

$(document).on('click', '#connectWalletButton', async function(){
  try{
    walletAddress = await og.signer.getAddress();
    let primaryName = await og.lnr.lookupAddress(walletAddress);
    if(primaryName)
      $(this).html('<div class="linageeGradient" style="width:22px; height:22px; margin:auto;">'+ linageeIcon + "</div>&nbsp;" + primaryName)
    else
      $(this).html(walletAddress.substring(0,6) + "..." + walletAddress.slice(walletAddress.length-4));
  }
  catch(e){
    $("#modal_title").html("!ooh");
    $("#modal_subtitle").html("Something went terribly wrong");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});


// MODAL AND NAVBAR
$(document).on('click', '.navbar-burger', function(){
  $("#main_navbar").toggleClass("is-active");
});

$(document).on('click', '.modal-background, .modal-close, .modal-card-head .delete, .modal-shut', function(){
  $("#modal_confirm-button").addClass("is-hidden");
  $("#modal_confirm-button").text("Confirm");
  $("#modal-js-example").removeClass('is-active');
});

$(document).on('click', '#modal_button', function(){
  $("#modal-js-example").addClass('is-active');
});
