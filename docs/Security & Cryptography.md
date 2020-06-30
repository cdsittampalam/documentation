---
id: Security & Cryptography
---

The Qredo network includes a secure architecture that allows transaction data to remain on the Qredo blockchain, and to allow transactions to be handled 24 by 7. Cryptography, running behind-the-scenes, ensures that all data is kept hidden, and reduces the likelihood of attacks to impossible odds.

This page describes:

*   data center security
    
*   MPC protocol
    
*   BLS signature scheme
    

Data Center Security
--------------------

The physical Qredo network is distributed where devices are stored in six Tier-4 data centers. The data centers are based in global financial capitals of Hong Kong, Tokyo, Singapore, London, Chicago, and New York. Tier-4 data centers deliver redundancy for all computing equipment to ensure maximum security.

### Data Center Components

Each data center contains dedicated computing equipment to support the MPC, Qredo blockchain, and watcher components. This includes:

*   a Qredo appliance housing two Rasberry Pi units for the Qredo blockchain non-validator validator and an MPC node. The MPC node can be a client or serve node.
    
*   a PC that holds the watcher and validator services in Docker containers.
    

Whenever transactions are written to the Qredo blockchain, the transactions are backed up on another device. Similarly, encrypted MPC keys are copied to each of the server and clients across multiple data centers.

### Hardware Security Module

Each Rasberry Pi unit has a tamper-proof Hardware Security Module that protects the seed value and public/private key data from attacks in a physical environment. The HSMs adhere to the FIPS (Federal information Processing Standard Publication 140-2) security standard. FIPS 140-2 is a US government computer security standard for cryptographic modules. The standard ensures that cryptographic keys and primitives never leave the hardware appliances that they exist in.

---

MPC Protocol
------------

The MPC (Multiparty Computation) protocol is based on MPC cryptography. The protocol is applied on a set of MPC nodes that work together to generate a signed public key and a public wallet address. Through its use of mathematics in a unique way, the MPC removes the need to sign transactions with a private key. Instead, the protocol uses its own aggregated signatures for the signing. This removal takes away the risk of private key theft.

The MPC protocol runs when generating a Bitcoin wallet address for money coming in to the Qredo network. The protocol also runs when creating an address to accept the change from a settlement. In both cases, the transactions are signed.

### MPC Communication Flow

The MPC protocol communicates with the blockchain validator nodes via the watcher service to ensure that it can process the correct wallet.

The protocol, relying on client and server communication, performs the following process for preparing and creating a public key that it needs for signing a transaction. The process involves all client and server MPC nodes across data centers. Both the public key and digital signatures are used for creating an address.

1.  A client and server node each generate their respective key material.
    
2.  The client node and server node each generate a separate AES key.
    
3.  The client node and server node each encrypt the key material with the AES key.
    
4.  The keys are stored in an AWS database.
    
5.  The AES key is encrypted for the client and server nodes in .all the data centers.
    
6.  The AES key is decrypted for all the client and server nodes.
    
7.  Both client and server nodes communicate to sign a new public key.
    
8.  The public key and digital signature is sent to the watcher to generate a new address

### Paillier Cryptosystem

The MPC uses the Paillier crypotsystem when the protocol is run. The Paillier cryptosystem handles secrets for communication between two parties. The cryptosystem uses the homomorphic encryption method which performs calculations on encrypted text (or cypher text) to generate another level of encrypted results. By way of the mathematics, the cryptosystem ensures that the result of the decryption is the same as the original decrypted cipher text.

### SECP256K

The MPC uses [SECP256K]: https://en.bitcoin.it/wiki/Secp256k1 to ensure that the generated public key is compatible with Bitcoin. SECP256K is the signature algorithm used by Bitcoin. Other cryptocurrencies use SECP256K which will allow Qredo to support Litecoin and Ethereum currencies in future releases.

**Note:** SEC means Standards for Efficient Cryptography

SECP256K1 is the discrete elliptic curve group used in Bitcoin's implementation of ECDSA (Elliptic Curve Digital Signature Algorithm). Elliptic curve cryptography allows the properties of elliptic curves to determine values such as public, private keys, and the coefficients for determining key values.

---

BLS Signature Scheme
--------------------

To determine asset ownership and governance on the Qredo blockchain, the Qredo network uses the BLS (Boneh–Lynn–Shacham) signature scheme. For example, each time a custodian approves a transfer, a BLS signature is generated. BLS allows the sharing of public keys as well as the aggregation of signatures that is required to apply the consensus rules in Qredo. The signature scheme provides a highly efficient way of aggregation over other signature aggregation methods.

### Key Generation

BLS public and private key pairs are generated when an IDDoc is created for a user who joins the Qredo network. A seed value, stored in the secure enclave of a secure hardware appliance, generates a private and public key pair.

### BLS Encryption Method

BLS uses elliptic curve cryptography combined with bi-linear mapping to calculate public keys, private keys, and signatures. Bi-linear mapping features algebra. Through its mathematics, BLS allows the creation of shorter signatures for more efficient signing.

:::info
Cryptography in Qredo is built from the Apache Milagro project. More information is also available from Qredo's Yellow Paper.
:::