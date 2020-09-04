---
id: Qredo Network
title: Qredo Network
sidebar_label: Qredo Network
---

The Qredo Network is an institutional grade clearing and settlement network for digital assets. Consisting of an asset-tracking blockchain, the Qredo Network is secured by a set of consensus-driven MPC (Multiparty Computation) nodes. Together, these ensure that Qredo’s open Layer 2 protocol can accelerate any blockchain to achieve near-instant digital asset delivery. Digital assets comprise of money in the form of cryptocurrency.

The Layer 2 characteristics of the Qredo blockchain provide transparency, immutability, and decentralisation.

This page describes: 

*   basic concepts on the Qredo Network (see [Introduction](#qredo-network-introduction)). 
*   technical details on the architecture (refer to the section on the [Architecture](#architecture) and onwards).


Introduction
------------

The Qredo Network allows the management of digital assets where transactions are processed through the Qredo blockchain with various nodes and services working together.

The Qredo blockchain records transactions that happen for these events:

*   A new user joins Qredo.
*   Money is deposited to an account.
*   Money is transferred from one Qredo user to another.
*   Money is withdrawn from the Qredo Network.


Users interact with the Qredo Network using the Qredo app (see [Qredo App Overview](/docs/Qredo%20App%20Overview)). When you have installed the app, you can invite users to be a trusted party from within the Qredo Network, or from outside of Qredo via LinkedIn, Telegram or WhatsApp.  

A developer user can use the Qredo Network through the [Partner API](/docs/Partner%20API).

Qredo currently supports Bitcoin. However, future versions will include Ethereum, XRP, USDC coin, and other cryptocurrencies.

### Behaviours

The Qredo Network includes behaviours to ensure that transactions are saved securely on the Qredo blockchain.

#### Digital Signatures

A transaction contains encrypted messages between nodes with one or more signatures in BLS format. When a user signs up for the Qredo Network, their own signature is added to the Qredo blockchain in the form of an IDDoc. Transactions, in the case of transfers and withdrawals, are written to the Qredo blockchain with the aggregated digital signatures of the participants that sign a transaction.

Recording the aggregation of signatures on the Qredo blockchain makes the blockchain serve as a consensus-driven immutable record of asset ownership. A transaction cannot be written to the Qredo blockchain without the aggregated signatures.

#### Consensus Rules

A transaction requires various signatures from these participants that meet rules and conditions. These include:

- The **principal** who decides on the custodian, custodian groups, and thresholds. They can also be the **trade initiator** where they provide a signature when money is transferred to a counterparty recipient, added, or withdrawn from the Qredo Network.
- The **counterparty** who receive funds from the principal in a transfer.
- The **custodian** who approves or rejects a transaction. When they approve, a signature is provided for the transaction. The custodian is part of a custodian group created by the principal, and is linked to the fund of that transaction. Depending on the threshold, one or more custodians in the group need to provide their signatures.

#### Threshold

For a transaction to be approved and written to the Qredo blockchain, the threshold determines how many custodian signatures are needed within a custodian group. For example, for a threshold of 2/3, at least 2 out of 3 signatures are needed for a transaction to be written to the blockchain. A higher threshold level, e.g. containing a ratio of 3/3, needs more custodian signatures for a transaction to take place. A lower threshold, e.g. containing a ratio of 1/3, needs fewer signatures for a transaction to take place.  

#### Transfer Policies

Transfer policies determine the type of transaction that a custodian can sign. These include transfer and withdrawal policies. Custodians can be part of a group that allows, for example, signatures for a withdrawal policy.

#### Qredo Wallet

Qredo wallet enables the management of money on the Qredo Network. A wallet links to an external cryptocurrency address and captures deposits into that address as funds it controls on the Qredo blockchain. A wallet is created when money is first added to the Qredo Network for deposits. Addresses need to be created for money going out.

#### Qredo Blockchain

The Qredo blockchain consists of blocks of data that are joined together to create a chain. These blocks of data are assets that represent different Qredo app user actions and network configuration data that must be kept secure.

Assets comprise of:

*   IDDocs
*   wallet transfers
*   Settlement UTXOs
*   Settlements 
*   MPC key lists)

:::info
Assets, when specifically referred to for the Qredo blockchain, are different from digital assets that are described in the context of trading and finance.
:::

Qredo blockchain software components are built using [Tendermint](https://tendermint.com/), which delivers security and the ability to process a large number of transactions. Blockchain networks built using Tendermint are secured through [Proof-of-Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp) instead of Proof-of-Work, and are less energy-intensive.  

---

Architecture
------------

The Qredo Network consists of computers that are categorised as nodes or services, working together to process transactions and create blocks. The Qredo Network is different from other cryptocurrency networks where all nodes run the same client software. The computers are deployed in Tier-4 data centers within global financial capitals on a highly-secure hardware infrastructure running on a low-latency network. Each node or service has a dedicated function as summarised in this diagram:

![architecture](/doc-images/arch2606.png)

#### User and App

A Qredo user adds data to the Qredo Signing App, e.g., for a transaction. For example, a principal enters options to transfer money to another user. Custodians, using the Qredo Signing App on their phones, approve or reject the transaction. The approval or rejection unlocks digital signatures in the app.

#### Qredo Server

The Qredo server processes the signatures from the transactions.

#### Blockchain Validator

The blockchain validator node creates blocks on the Qredo blockchain from incoming transactions. The node keeps a copy of the Qredo blockchain. As of June 2020, the Qredo Network has six blockchain validators of which >2/3 (subject to voting weight) must verify and authorise every new block.

#### Watcher

The watcher mediates between the blockchain validator, MPC cluster, and cryptocurrency network nodes. The service is designed to prevent theft if compromised. The watcher plays a key role when a new wallet is created, when money is deposited to a user’s account, and when a settlement is made.

#### Bitcoin

The node, residing on an external cryptocurrency network, keeps a copy of the underlying chain (such as the Bitcoin blockchain). The node allows the monitoring of payments in and out of Qredo. The watcher can connect to multiple nodes to increase certainty on the state of the external network. Future versions will include nodes that support other currencies.

#### MPC Cluster

The MPC cluster is a set of nodes that work together to generate a signed public key by applying the MPC protocol. The protocol, through its use of mathematics behind the scenes, alleviates the need for a private key in order to sign transactions that are added to the Qredo blockchain. More information on the MPC is described in [Security & Cryptography](/docs/Security%20&%20Cryptography).

The MPC cluster works with both the watcher and the MPC validator.  When adding funds, an MPC node verifies the validity of a request against either a proof supplied with the transaction, or by querying the Qredo blockchain validator. Any resultant MPC transaction can be transferred back to the Qredo blockchain through the watcher. The validity of the transaction can be checked by verifying the signatures against the public keys of the MPC cluster.

#### MPC Validator

The MPC Validator accesses data on the Qredo blockchain on request of the MPC cluster through an independent connection to the blockchain validator nodes. The MPC validator is needed for highly sensitive processes such as a withdrawal.

Transaction Flows
-----------------

Transaction flows require nodes and services to perform various functions on the Qredo Network, including when a user:

*   joins Qredo
*   deposits money
*   transfers money
*   withdraws money

The nodes and services used depends on the complexity of the transaction. For example, withdrawing money uses more nodes and services than when a user joins Qredo.

### Joining Qredo

These steps exist when a user joins Qredo. An IDDoc is generated by the app for identification.

1.  User joins Qredo from the Qredo Wallet app.
2.  The app generates an IDDoc containing a public key for the new user.
3.  The user signs the IDDoc with their private key.
4.  The Qredo server processes the IDDoc.
5.  The blockchain validator checks that the IDDoc is unique.
6.  The blockchain validator writes the IDDoc to the Qredo blockchain.

### Depositing Money

For depositing money, Alice creates a wallet using the app. Various nodes and services are used as summarised:

![architecture](/doc-images/depositfunds.png)

#### Blockchain Validator Updates
The blockchain validator records these events:

 - the wallet Alice has created on Qredo with her IDDoc.
 - details of the deposit transaction to a wallet address.

#### Watcher and MPC
The watcher informs the MPC to generate a cryptocurrency address for the incoming money on the Qredo transaction. This is also known as a peg-in transaction.

The watcher adds the address as a watch-only address on the Bitcoin node. This allows the node to see changes in the wallet for the money coming in. When Anne deposits money for Alice in the address, the watcher periodically (every minute) requests wallet changes from its Bitcoin node. When the node is queried periodically, the node can provide full UTXO details, together with proof of existence on the underlying chain.


:::info
When the node is queried periodically, the node can provide full UTXO details, together with proof of existence on the underlying chain.
:::

#### Mapping Address and Amounts
The Qredo blockchain uses consensus rules to map the cryptocurrency address to Alice’s wallet through the MPC. The amount of money deposited into the address is added to the balance in Alice’s wallet. The balance is a value in the consensus database with the key “Wallet_Alice.balance”. The balance in the database key increases as more funds are added.


### Transferring Money

When transferring money, the participants update the user interface. The transactions are signed by the Qredo server, and the blockchain validator node updates the Qredo blockchain.

1.  Alice and Bob are both on the Qredo Network.
2.  Bob arranges to send money to Alice.
3.  Bob creates an updated wallet which is based on his original one, but also contains a transfer of funds to Alice’s wallet. This transaction needs to be signed by Bob and either Alice or Charlie before it is valid. The signing ensures it is accepted by the consensus rules and entered onto the Qredo blockchain.
4.  As the wallet update is committed to the Qredo blockchain, the consensus rules ensure that an action is triggered to transfer an amount from the wallet balance of Alice's to Bob’s.

### Withdrawing Money

For withdrawing money, or a settlement, money is transferred back out of the Qredo Network to an external address.  To ensure that a valid wallet is put forward, various nodes and services are used as summarised:

![settle funds](/doc-images/settlefunds.png)

Alice updates a wallet using the app. The custodians in the network need to sign the transaction.

During the transaction, the wallet is locked to prevent any further updates.  The wallet is unlocked when the transaction ends.

#### Blockchain Validator Updates

The blockchain validator records:

- the transaction and the signatures.
- the completed transaction which allows change from the settlement to released back in to Qredo.

#### Watcher and MPC

The watcher informs the MPC nodes to sign a peg-out transaction, which authorises money to go out of Qredo, and generate an external address. The watcher works with the MPC to generate an external address for the unspent funds, which is used by the Bitcoin node for monitoring funds going out of Qredo.

#### MPC Validator

To keep the Qredo Network secure when funds leave the network, the MPC validator double-checks the funds during a settlement. The MPC validator accesses the Qredo blockchain on request by the MPC cluster, and uses an independent connection.

#### Broadcasting a Transaction

To allow external blockchains to have a record of a settlement transaction, the watcher service broadcasts the transaction to the external blockchains. There is also a corresponding transaction on the Qredo blockchain, which releases the change from the settlement back into Qredo.

A crystallisation process (see section below) is also performed on the Qredo blockchain to build an unsigned transaction.

Crystallisation
---------------

At the end of every transaction is the crystallisation process to ensure that the amounts in each wallet are correct for all Qredo users. To ensure solvency for the system, the process also proves that all coins locked onto the Qredo blockchain system are spendable.

For each user, the process ensures that the amounts are mapped to a UTXO on an external address. For example, if a wallet has 30 Bitcoin between Bob and Alice, the crystallisation process will:

*   map the wallet to Alice's UTXO containing 12 Bitcoin
*   map the wallet to Bob's UTXO containing 18 Bitcoin  

The allocations made during crystallisation are used when a user requests settlement. Their crystallised funds minus any fees are transferred out of the Qredo Network, and any change is returned back.
