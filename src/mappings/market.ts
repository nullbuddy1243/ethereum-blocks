
// type Buy @entity {
//     offerID: BigInt!
//     buyer: Bytes!
//     token: Bytes!
//     tokenID: BigInt!
//     amount: BigInt!
//     deadline: BigInt!
//     price: BigInt!
//     fee: BigInt!
//   }

import { EthereumBlock } from "@graphprotocol/graph-ts";

  
//   type Sell @entity {
//     offerID: BigInt!
//     admin: Bytes!
//     token: Bytes!
//     tokenID: BigInt!
//     amount: BigInt!
//     deadline: BigInt!
//     price: BigInt!
//   }
  
//   type Cancel @entity {
//     offerID: BigInt!
//     canceller: Bytes!
//     token: Bytes!
//     tokenID: BigInt!
//     time: BigInt!
//   }

export function marketplaceEvent(block: EthereumBlock): void {
    
}

export function handleBuy(block: EthereumBlock): void {
    // let id = block.hash.toHex()
    // let blockEntity = new Block(id);
    // blockEntity.number = block.number;
    // blockEntity.timestamp = block.timestamp;
    // blockEntity.parentHash = block.parentHash.toHex();
    // blockEntity.author = block.author.toHex();
    // blockEntity.difficulty = block.difficulty;
    // blockEntity.totalDifficulty = block.totalDifficulty;
    // blockEntity.gasUsed = block.gasUsed;
    // blockEntity.gasLimit = block.gasLimit;
    // blockEntity.receiptsRoot = block.receiptsRoot.toHex();
    // blockEntity.transactionsRoot = block.transactionsRoot.toHex();
    // blockEntity.stateRoot = block.stateRoot.toHex();
    // blockEntity.size = block.size;
    // blockEntity.unclesHash = block.unclesHash.toHex();
    // blockEntity.save();
  }

export function handleSell(block: EthereumBlock): void {

}

export function handleCancel(block: EthereumBlock): void {
    
}