// import {
//     EthereumBlock
// } from "@graphprotocol/graph-ts"

// import {
//     Block
// } from "../../generated/schema"


// /* https://github.com/AleG94/ethereum-events

// {
//   "name": "Transfer",
//   "contract": "Token",
//   "timestamp": 1591110290,
//   "blockHash": "0xde42b82c4e28122218d79f8491b05587608a8c9bb87c0d0df9be9fb9ae6f7e13",
//   "blockNumber": 6596988,
//   "transactionHash": "0x686943cee4035375b25209a2972535c93eefb688fad42d72e518c452387c69c9",
//   "transactionIndex": 10,
//   "from": "0x5B848132d3a0111d4daB7060b6051961013C71c7",  // sender of the transaction
//   "to": "0xefE1e4e13F9ED8399eE8e258b3a1717b7D15f054",    // receiver of the transaction
//   "logIndex": 11,
//   "values": {
//     "from": "0x343c6A169D973bBF33A8F1535754A4745a3BD9C1",
//     "to": "0x78a3339aD6A565B4136077C8878970D7f1B66021",
//     "value": "100000000000000000000"
//   }
// }

// */ 
// export function handleBlock(block: EthereumBlock): void {
//     let id = block.hash.toHex()
//     let blockEntity = new Block(id);
//     blockEntity.number = block.number;
//     blockEntity.timestamp = block.timestamp;
//     blockEntity.parentHash = block.parentHash.toHex();
//     blockEntity.author = block.author.toHex();
//     blockEntity.difficulty = block.difficulty;
//     blockEntity.totalDifficulty = block.totalDifficulty;
//     blockEntity.gasUsed = block.gasUsed;
//     blockEntity.gasLimit = block.gasLimit;
//     blockEntity.receiptsRoot = block.receiptsRoot.toHex();
//     blockEntity.transactionsRoot = block.transactionsRoot.toHex();
//     blockEntity.stateRoot = block.stateRoot.toHex();
//     blockEntity.size = block.size;
//     blockEntity.unclesHash = block.unclesHash.toHex();
//     blockEntity.save();
//   }