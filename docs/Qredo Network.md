---
id: Qredo Network
title: Qredo Network
sidebar_label: Qredo Network
---

The Qredo network consists of an asset-tracking blockchain secured by a set of consensus-driven MPC (Multiparty Computation) nodes. Together, these ensure that Qredo’s open Layer 2 protocol can accelerate any blockchain to achieve near-instant digital asset delivery. Digital assets comprise of money in the form of cryptocurrency.

The Layer 2 characteristics of the Qredo blockchain provide transparency, immutability, and decentralisation.

This page describes basic concepts on the Qredo network (see [Introduction](#qredo-network-introduction)). For more technical details, refer
to the section on the [Architecture](#architecture) and onwards.
    

Introduction
------------

The Qredo network allows the management of digital assets where transactions are processed through the Qredo blockchain with various nodes and services working together.

The Qredo blockchain records transactions that happen for these events:

*   A new user joins Qredo.
*   Money is deposited to an account that allows digital assets (e.g., Bitcoins).
*   Money is transferred from one Qredo user to another.
*   Money is withdrawn from the Qredo network
    

Users interact with the Qredo network using the Qredo app that they signed up for (see [Qredo App Overview](/docs/Qredo%20App%20Overview)). In addition, a developer user can use the Qredo network by enrolling for the Partner API. Details on the Partner API are coming soon.

Qredo currently supports Bitcoin. However, future versions will include Ethereum, XRP, USDC coin, and other cryptocurrency support.

### Behaviors

The Qredo network includes behaviours to ensure that transactions are saved securely on the Qredo blockchain.

#### Aggregated Digital Signatures

A transaction contains encrypted messages between nodes with signatures in BLS format. Before a transaction is written to the Qredo blockchain, the aggregated digital signatures of participants that sign a transaction need to be recorded. Recording the aggregation of signatures makes the Qredo blockchain serve as a consensus-driven immutable record of asset ownership.

#### Consensus Rules

A transaction requires various signatures from these participants that meet rules and conditions. These include: 

- The **principal** who decides on the custodian, custodian groups, and thresholds. They provide a signature when money is transferred to a counterparty recipient, added or withdrawn from the Qredo network.
- The **counterparty** who provides a signature for a transfer that the principal has signed. Signing confirms that they want to receive funds from the principal. 
- The **custodian** who approves or rejects a transaction. When they approve, a signature is provided for the transaction. The custodian is part of a custodian group created by the principal, and is linked to the fund of that transaction. Depending on the threshold, one or more custodians in the group need to provide their signatures.

#### Threshold

For a transaction to be approved and written to the Qredo blockchain, the threshold determines how many custodian signatures are needed within a custodian group. For example, for a threshold of 2/3, at least 2 out of 3 signatures are needed for a transaction to be written to the blockchain.

#### Transfer Policies

Transfer policies determine the type of transaction that a custodian can sign. Custodians can be part of a group that allows, for example, signatures for a withdrawal policy. This lets the Qredo blockchain support workflows for more complex business requirements.

#### Qredo Wallet

Qredo wallet enables the management of money on the Qredo network. A wallet links to an external Bitcoin address and captures deposits into that address as funds it controls on the Qredo blockchain. A wallet is created when money is first added to the Qredo network. Addresses need to be created for money coming in or out.

#### Qredo Blockchain

The Qredo blockchain consists of blocks of data that are joined together to create a chain. These blocks of data are assets that represent different Qredo app user actions and network configuration data that must be kept secure.

Assets comprise of:

*   IDDocs
*   wallet transfers
*   Settlement UTXOs
*   Settlements 
*   MPC key lists
    
:::info
Assets in the Qredo blockchain are different from digital assets that are described for trading and finance.
:::

Qredo blockchain software components are built using [Tendermint](https://tendermint.com/), which delivers security and the ability to process a large number of transactions.. Blockchain networks built using Tendermint are secured through cryptography (permission) instead of proof-of-work, and are less energy-intensive and not subject to 51% attacks.  

---

Architecture
------------

The Qredo network consists of computers that are categorised as nodes or services, working together to process transactions and create blocks. The Qredo network is different from other cryptocurrency networks where all nodes run the same client software. The computers are deployed in Tier-4 data centers within global financial capitals on a highly-secure hardware infrastructure running on a low-latency network. Each node or service has a dedicated function as summarised in this diagram:

![architecture](/doc-images/arch2606.png)

#### User and App

A Qredo user adds data to a web app, e.g., for a transaction. For example, a principal enters options to transfer money to another user. Custodians, using the mobile app on their phones, approve or reject the transaction. The approval or rejection unlocks digital signatures in the app.

#### Qredo Server

The Qredo server processes the signatures from the transactions.

#### Blockchain Validator

The blockchain validator node creates blocks on the Qredo blockchain from incoming transactions. The node keeps a copy of the Qredo blockchain. As of June 2020, the Qredo network has six blockchain validators of which >2/3 (subject to voting weight) must verify and authorise every new block.

#### Watcher

The watcher mediates between the blockchain validator, MPC cluster, and Bitcoin network nodes. The service must not allow theft if compromised. However, a denial of service attack is possible, and the watcher would have to be redeployed. The watcher plays a key role when a new wallet is created, when money is deposited to a user’s account, and when a settlement is made.

#### Bitcoin

A node on an external cryptocurrency network (such as Bitcoin). The node keeps a copy of the underlying chain (such as the Bitcoin blockchain), and allows the Qredo app to monitor payments in and out of Qredo. The watcher can connect to multiple Bitcoin nodes to increase certainty on the state of the external network.

#### MPC Cluster

The MPC cluster is a set of nodes that work together to generate a signed public key by applying the MPC protocol. The protocol, through its use of mathematics behind the scenes, alleviates the need for a private key in order to sign transactions that are added to the Qredo blockchain. 

The MPC cluster works with both the watcher and the MPC validator.  When adding funds, an MPC node verifies the validity of a request against either a proof supplied with the transaction or by querying the Qredo blockchain validator. Any resultant MPC transaction can be transferred back to the Qredo blockchain through the watcher. The validity of the transaction can be checked by verifying the signatures against the public keys of the MPC cluster. 

#### MPC Validator

Accesses data on the Qredo blockchain on request by the MPC cluster through an independent connection to the blockchain validator nodes. The MPC validator is needed for highly sensitive processes such as fund withdrawal. 

---

Transaction Flows
-----------------

Transaction flows can require functions nodes and services to perform various functions on the Qredo network, including when a user:

*   joins Qredo
*   deposits money
*   transfers money
*   withdraws money
    
The nodes and services used depends on the complexity of the transaction. For example, withdrawing money uses more nodes and services than when a user joins Qredo.

### Joining Qredo

These steps exist when a user joins Qredo. An IDDoc is generated by the app for identification.

1.  User joins Qredo from the web app
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

 - the wallet Alice has created on Qredo with her IDDoc
 - details of the deposit transaction to a wallet address.

#### Watcher and MPC
The watcher informs the MPC to generate a Bitcoin address for the incoming money on the Qredo transaction. This is also known as a peg-in transaction. 

The watcher adds the Bitcoin address as a watch-only address on the Bitcoin node. This allows the node to see changes in the wallet for the money coming in. When Anne deposits Bitcoin for Alice in the address, the watcher periodically (every minute) requests wallet changes from its Bitcoin node.

:::info
When the node is queried periodically, the node can provide full UTXO details, together with proof of existence on the underlying chain. 
:::

---

#### Mapping Address and Amounts
The Qredo blockchain uses consensus rules to map the Bitcoin address to Alice’s wallet through the MPC. The amount of Bitcoin deposited into the address is added to the Bitcoin balance in Alice’s wallet. The balance is a value in the consensus database with the key “Wallet_Alice.balance”. The balance in the database key increases as more funds are added.

---

#### Monitoring the Bitcoin Address

When monitoring the Bitcoin address, the watcher adds the Bitcoin address as a watch-only address on the Bitcoin node. When Anne deposits Bitcoin for Alice in the address, the watcher periodically (every minute) requests wallet changes from its Bitcoin node.

When the node is queried periodically, the node can provide full UTXO details, together with proof of existence on the underlying chain.

---

### Transferring Money

When transferring money, the participants update the user interface. The transactions are signed by the Qredo server and the blockchain validator node updates the Qredo blockchain. 

1.  Alice and Bob are both on the Qredo network.
2.  Bob arranges to send Alice Bitcoin.
3.  Bob creates an updated wallet which is based on his original one, but also contains a transfer of funds to Alice’s wallet. This transaction needs to be signed by Bob and either Alice or Charlie before it is valid. The signing ensures it is accepted by the consensus rules and entered onto the Qredo blockchain.
4.  As the wallet update is committed to the Qredo blockchain, the consensus rules ensure that an action is triggered to transfer an amount from the wallet balance of Alice's to Bob’s.
    
### Withdrawing Money

For withdrawing money, or a settlement, money is transferred back out of the Qredo network to an external address.  To ensure that a valid wallet is put forward, various nodes and services are used as summarised:

![settle funds](/doc-images/settlefunds.png)

Alice updates a wallet using the app. The custodians in the network need to sign the transaction.

During the transaction, the wallet is locked to prevent any further updates.  The wallet is unlocked when the transaction ends.

#### Blockchain Validator Updates

The blockchain validator records:

- the transaction and the signatures
- the completed transaction which allows change from the settlement to released back in to Qredo.

---

#### Watcher and MPC

The watcher informs the MPC nodes to sign a peg-out transaction, which authorises money to go out of Qredo, and generate an external address. The watcher works with the MPC to generate an external address for the unspent funds, which is used by the Bitcoin node for monitoring funds going out of Qredo. 

---

#### MPC Validator

To keep the Qredo network secure when funds leave the network, the MPC validator double-checks the funds during a settlement. The MPC validator accesses the Qredo blockchain on request by the MPC cluster, and uses an independent connection.

---

#### Broadcasting a Transaction

To allow external blockchains to have a record of a settlement transaction, the watcher service broadcasts the transaction to the external blockchains. There is also a corresponding transaction on the Qredo blockchain, which releases the change from the settlement back into Qredo.

A crystallisation process (see section below) is also performed on Qredo blockchain to build an unsigned Bitcoin transaction.

---

Crystallization
---------------

At the end of every transaction is the crystallization process to ensure that the amounts in each wallet are correct for all Qredo users. To ensure solvency for the system, the process also proves that all coins locked onto the Qredo blockchain system are spendable.

For each user, the process ensures that the amounts are mapped to a UTXO on an external Bitcoin address. For example, if a wallet has 30 Bitcoin between Bob and Alice, the crystallization process will:

*   map the wallet to Alice's UTXO containing 12 Bitcoin
    
*   map the wallet to Bob's UTXO containing 18 Bitcoin  

The allocations made during crystallization are used when a user requests settlement. Their crystalized funds minus any fees are transferred out of the Qredo network, and any change is returned back.