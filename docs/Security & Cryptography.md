---
id: Security & Cryptography
---

The Qredo Network includes a secure architecture that allows transaction data to remain on the Qredo blockchain, and be handled 24 by 7. Cryptography, running behind-the-scenes, ensures that all data is kept hidden, and reduces the likelihood of attacks to impossible odds.

This page describes the following:

*   [Data centre security](#data-centre-security)
*   [MPC protocol](#mpc-protocol)
*   [BLS signature scheme](#bls-signature-scheme)


Data Centre Security
--------------------

The physical Qredo Network is distributed where devices are stored in six Tier-4 data centres. The data centres are based in global financial capitals of Hong Kong, Tokyo, Singapore, London, Chicago, and New York. Tier-4 data centres deliver redundancy for all computing equipment to ensure maximum security.

### Data Centre Components

Each data centre contains dedicated computing equipment to support the MPC, Qredo blockchain, and watcher components. This includes:

*   Qredo appliances that house Rasberry Pi units for the MPC nodes and the MPC validator. Each MPC node can be a client or a server node.
*   a PC that holds the watcher and Blockchain validator services.

Whenever transactions are written to the Qredo blockchain, the transactions are backed up on another device. Similarly, encrypted MPC keys are copied to each of the server and clients across multiple data centres.

Communication takes place between data centres over routers. Between the Rasberry Pi units on the device, communication takes place over SSH.

### HSMs

Each Rasberry Pi unit has a tamper-proof HSM (Hardware Security Module) that protects the seed value and public/private key data from attacks in a physical environment. The HSMs adhere to the FIPS (Federal information Processing Standard Publication 140-2) security standard. FIPS 140-2 is a US government computer security standard for cryptographic modules which ensures that cryptographic keys and primitives never leave the hardware appliances that they exist in.

MPC Protocol
------------

The MPC (Multiparty Computation) protocol is based on MPC cryptography. The protocol is applied on a set of MPC nodes that work together to generate a signed public key and a public wallet address for securing transactions on the Qredo Network. Through its use of mathematics in a unique way, the MPC removes the need to sign transactions with a private key. Instead, the protocol uses its own aggregated signatures for the signing. This removal takes away the risk of private key theft.

The MPC protocol runs when generating a wallet address for money coming in to the Qredo Network. The protocol also runs when creating an address to accept the change from a settlement. In both cases, the transactions are signed.

The MPC protocol communicates with the blockchain validator nodes via the watcher service to ensure that it can process the correct wallet (more information is described in the [Architecture](docs/Qredo%20Network#architecture) section on the Qredo Network page.

### MPC Communication Flow

For generating a public key through the MPC protocol, the task is divided across a pair of client and server nodes, which take place across all the data centres. By enabling the process to take place across multiple data centres, single points of failures are removed. Both the client and server nodes compute details of keys where several steps, illustrated as follows, are needed to produce the final public key:

1.  A client and server node each generate their respective key data.

2.  The client node and server node each generate a separate AES-encrypted key.

3.  The client node and server node each encrypt the key data with the AES key.

4.  The keys are stored in an AWS database.

5.  The AES key is encrypted for the client and server nodes in all the data centres.

6.  The AES key is decrypted for all the client and server nodes.

7.  Both client and server nodes communicate to sign a new public key.

8.  The public key and digital signature is sent to the watcher to generate a new address.

### Paillier Cryptosystem

The MPC uses the Paillier cryptosystem when the protocol is run. The Paillier cryptosystem handles secrets for communication between two parties. The cryptosystem uses the homomorphic encryption method which performs calculations on encrypted text (or cypher text) to generate another level of encrypted results. By way of the mathematics, the cryptosystem ensures that the result of the decryption is the same as the original decrypted cipher text.

### SECP256K

The MPC uses [SECP256K](https://en.bitcoin.it/wiki/Secp256k1) to ensure that the generated public key is compatible with Bitcoin. SECP256K is the signature algorithm used by Bitcoin. Other cryptocurrencies use SECP256K, which will allow Qredo to support Litecoin and Ethereum currencies in future releases.

**Note:** SEC means Standards for Efficient Cryptography

SECP256K1 is the discrete elliptic curve group used in Bitcoin's implementation of ECDSA (Elliptic Curve Digital Signature Algorithm). Elliptic curve cryptography allows the points of elliptic curves to determine values such as public, private keys, and the coefficients for determining key values.


BLS Signature Scheme
--------------------

To determine asset ownership and governance on the Qredo blockchain, the Qredo Network uses the BLS (Boneh–Lynn–Shacham) signature scheme. For example, each time a custodian approves a transfer, a BLS signature is generated. BLS allows the sharing of public keys as well as the aggregation of signatures that is required to apply the consensus rules in Qredo. The signature scheme provides a highly efficient way of aggregation over other signature aggregation methods.

### Key Generation

BLS public and private key pairs are generated when an IDDoc is created for a user who joins the Qredo Network. A seed value, stored in the secure enclave of a secure hardware appliance, generates a private and public key pair.

### BLS Encryption Method

BLS uses elliptic curve cryptography combined with bi-linear mapping to calculate public keys, private keys, and signatures. Bi-linear mapping features algebra to find equivalent expressions. Through its mathematics, BLS allows the creation of shorter signatures for more efficient signing.

:::info
Cryptography in Qredo is built from the [Apache Milagro project](https://milagro.apache.org/users.html). More information is also available from Qredo's Yellow Paper on the main Qredo website.
:::
