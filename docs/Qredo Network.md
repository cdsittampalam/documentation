---
id: Qredo Network
title: Qredo Network
sidebar_label: Qredo Network
---

The Qredo network consists of an asset-tracking blockchain secured by a set of consensus-driven MPC (Multiparty Computation) nodes. Together, these ensure that Qredo’s open Layer 2 protocol can accelerate any blockchain to achieve near-instant digital asset delivery. Digital assets comprise of money in the form of cryptocurrency.

The Layer 2 characteristics of the Qredo blockchain provide transparency, immutability, and decentralisation.

This page describes the following:

*   [Introduction to the Qredo Network](https://qredo.atlassian.net/wiki/spaces/QD/pages/121865074/Qredo+Network#Introduction-to-the-Qredo-Network)  

*   [Service and Node Architecture](https://qredo.atlassian.net/wiki/spaces/QD/pages/121865074/Qredo+Network#Service-and-Node-Architecture)
    
*   [Transaction Flows](https://qredo.atlassian.net/wiki/spaces/QD/pages/121865074/Qredo+Network#Transaction-Flows)
    
*   [Crystallization](https://qredo.atlassian.net/wiki/spaces/QD/pages/121865074/Qredo+Network#Crystallization)
    

Introduction to the Qredo Network
---------------------------------

The Qredo network allows the management of digital assets where transactions are processed through the Qredo blockchain with various nodes and services working together.

The Qredo blockchain records transactions that happen for these events:

*   A new user joins Qredo.
    
*   Money is deposited to an account that allows digital assets (e.g., Bitcoins).
    
*   Money is transferred from one Qredo user to another.
    
*   Money is withdrawn from the Qredo network
    

Users interact with the Qredo network using the Qredo app that they signed up for (see [Qredo App](/wiki/pages/createpage.action?spaceKey=QD&title=Qredo+App&linkCreation=true&fromPageId=121865074)). In addition, a developer user can use the Qredo network by enrolling for the partner API.

Qredo currently supports Bitcoin. However, future versions will include Ethereum, XRP, USDC coin, and other cryptocurrency support.

### Behaviours the Qredo Network

The Qredo network includes behaviours to ensure that transactions are saved securely on the Qredo blockchain.

####Aggregated Digital Signatures

A transaction contains encrypted messages between nodes with signatures in BLS format. Before a transaction is written to the Qredo blockchain, the aggregated digital signatures of participants that sign a transaction need to be recorded. Recording the aggregation of signatures makes the Qredo blockchain serve as a consensus-driven immutable record of asset ownership.

####Consensus Rules on Signing Participants

A transaction requires various signatures from these participants that meet rules and conditions. The **principal** who decides on the custodian, custodian groups, and thresholds. They provide a signature when money is transferred to a counterparty recipient, added or withdrawn from the Qredo network. The **counterparty** who provides a signature for a transfer that the principal has signed. Signing confirms that they want to receive funds from the principal. The **custodian** who approves or rejects a transaction. When they approve, a signature is provided for the transaction. The custodian is part of a custodian group created by the principal, and is linked to the fund of that transaction. Depending on the threshold, one or more custodians in the group need to provide their signatures.

####Threshold

For a transaction to be approved and written to the Qredo blockchain, the threshold determines how many custodian signatures are needed within a custodian group. For example, for a threshold of 2/3, at least 2 out of 3 signatures are needed for a transaction to be written to the blockchain.

####Transfer Policies

Transfer policies determine the type of transaction that a custodian can sign. Custodians can be part of a group that allows, for example, signatures for a withdrawal policy. This lets the Qredo blockchain support workflows for more complex business requirements.

### Qredo Wallet

Qredo wallet enables the management of money on the Qredo network. A wallet links to an external Bitcoin address and captures deposits into that address as funds it controls on the Qredo blockchain. A wallet is created when money is first added to the Qredo network.

### Qredo Blockchain

The Qredo blockchain consists of blocks of data that are joined together to create a chain. These blocks of data are assets that represent different Qredo app user actions and network configuration data that must be kept secure.

Assets comprise of:

*   IDDocs
    
*   wallet transfers
    
*   Settlement UTXOs
    
*   Settlements 
    
*   MPC key lists
    

Assets in the Qredo blockchain are different from digital assets that are described for trading and finance.

Qredo blockchain software components are built using Tendermint [https://tendermint.com/](https://tendermint.com/), which delivers security and the ability to process a large number of transactions.. Blockchain networks built using Tendermint are secured through cryptography (permission) instead of proof-of-work, and are less energy-intensive and not subject to 51% attacks.  

Service and Node Architecture
-----------------------------

The Qredo network consists of computers that are categorised as node or services, working together to process transactions and create blocks. The Qredo network is different from other cryptocurrency networks where all nodes run the same client software. The computers are deployed in Tier-4 data centers within global financial capitals on a highly-secure hardware infrastructure running on a low-latency network. Each node or service has a dedicated function as summarised in this diagram:

![](https://qredo.atlassian.net/wiki/download/attachments/121865074/qredo%20updated%20architecture%202106.png?api=v2)

|     |     |
| --- | --- |
| **User and App** | A Qredo user adds data to a web app for a transaction. For example, a principal enters options to transfer money to another user. Custodians, using the mobile app on their phones, approve or reject the transaction. The approval or rejection unlocks digital signatures in the app. |
| **Qredo Server** | The Qredo server processes the signatures from the transactions. |
| **Blockchain Validator** | The blockchain validator node creates blocks on the Qredo blockchain from incoming transactions. The node keeps a copy of the Qredo blockchain. As of June 2020, the Qredo network has six blockchain validators of which >2/3 (subject to voting weight) must verify and authorise every new block. |
| **Watcher** | The watcher mediates between the blockchain validator, MPC cluster and Bitcoin network nodes. The service must not allow theft if compromised; however, a denial of service attack is possible. The watcher plays a key role when a new wallet is created, when money is deposited to a user’s account, and when a settlement is made. |
| **Bitcoin** | A node on an external cryptocurrency network (such as Bitcoin). The node keeps a copy of the underlying chain (such as the Bitcoin blockchain), and allows the Qredo app to monitor payments in and out of Qredo. The watcher can connect to multiple Bitcoin nodes to increase certainty on the state of the external network |
| **MPC Cluster** | The MPC cluster is a set of nodes that work together to generate a signed public key by applying the MPC protocol. The protocol, through its use of mathematics behind the scenes, alleviates the need for a private key in order to sign transactions that are added to the Qredo blockchain. The MPC cluster works with both the watcher and the MPC validator.  When adding funds, an MPC node verifies the validity of a request against either a proof supplied with the transaction or by querying the Qredo blockchain validator. Any resultant MPC transaction can be transferred back to the Qredo blockchain through the watcher. The validity of the transaction can be checked by verifying the signatures against the public keys of the MPC cluster. |
| **MPC Validator** | Accesses data on the Qredo blockchain on request by the MPC cluster through an independent connection to the blockchain validator nodes. The MPC validator is needed for highly sensitive processes such as fund withdrawal. |

Transaction Flows
-----------------

This section shows transaction flows and the functions performed by nodes and services on the Qredo network. These include transactions when a user

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

Money is transferred onto the Qredo blockchain using a peg-In mechanism. The peg-in mechanism ensures that, when a user deposits Bitcoin to the Qredo, the network creates an address for the user to send their money to. For example, a user creates a Bitcoin fund for the Qredo-generated Bitcoin address of `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`. Peg-in addresses are managed by the MPC cluster.  
Once this payment is confirmed by the blockchain, the user has a credited fund on the Qredo app with the total amount available for transfer or withdrawal.

These are the main steps in the flow for depositing money.

![](https://qredo.atlassian.net/wiki/download/attachments/121865074/add%20fund%202106.png?api=v2)

#### Monitoring the Bitcoin Address

When monitoring the Bitcoin address, the watcher adds the Bitcoin address as a watch-only address on the Bitcoin node. When Anne deposits Bitcoin for Alice in the address, the watcher periodically (every minute) requests wallet changes from its Bitcoin node.

When the node is queried periodically, the node can provide full UTXO details, together with proof of existence on the underlying chain.

#### Mapping Address and Amounts

As this peg-in (underlying) transaction is committed to the chain, the Qredo blockchain uses consensus rules to map the Bitcoin address to Alice’s wallet through the MPC. The amount of Bitcoin deposited into the address is added to the Bitcoin balance in Alice’s wallet. The balance is a value in the consensus database with the key “Wallet\_Alice.balance”. The balance in the database key increases as more funds are added.

### Transferring Money

1.  Alice and Bob are both on the Qredo network.
    
2.  Bob arranges to send Alice Bitcoin.
    
3.  Bob creates an updated wallet which is based on his original one, but also contains a transfer of funds to Alice’s wallet. This transaction needs to be signed by Bob and either Alice or Charlie before it is valid. The signing ensures it is accepted by the consensus rules and entered Onto the Qredo blockchain.
    
4.  As the wallet update is committed to the Qredo blockchain, the consensus rules ensure that an action is triggered to transfer an amount from the wallet balance of Alice's to Bob’s.
    

### Withdrawing Money

Money is transferred back out of the Qredo network to an external address. This is a peg-out transaction or settlement. The MPC nodes are required to sign a peg-out transaction and generate an external address. The watcher works with the MPC to generate an external address for the unspent funds, which is used by the Bitcoin node for monitoring funds going out of Qredo.

During the transaction, the wallet is locked to prevent any further updates. The wallet is unlocked when the transaction ends.

A crystallisation process (see section below) is also performed on Qredo blockchain to build an unsigned Bitcoin transaction.

The communication flow is as follows.

![](https://qredo.atlassian.net/wiki/download/attachments/121865074/fund%20architecture.png?api=v2)

#### Broadcasting a Transaction to External Blockchains

To allow external blockchains to have a record of a settlement transaction, the watcher service broadcasts the transaction to the external blockchains. There is also a corresponding transaction on the Qredo blockchain, which releases the change from the settlement back into Qredo.

Crystallization
---------------

At the end of every transaction is the crystalization process to ensure that the amounts in each wallet are correct for all Qredo users. To ensure solvency for the system, the process also proves that all coins locked onto the Qredo blockchain system are spendable.

For each user, the process ensures that the amounts are mapped to a UTXO on an external Bitcoin address.  
For example, if a wallet has 30 Bitcoin between Bob and Alice, the crystalization process will:

*   map the wallet to Alice's UTXO containing 12 Bitcoin
    
*   map the wallet to Bob's UTXO containing 18 Bitcoin
    

The allocations made during crystallisation are used when a user requests settlement. Their crystalized funds minus any fees are transferred out of the Qredo network, and any change is returned back.