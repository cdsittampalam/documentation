---
id: Security & Cryptography
---

Other cryptography information to be added.

The MPC (Multiparty Computation) cluster is a set of computers or nodes that work together to generate a signed public key by applying the MPC protocol. The protocol, through its use of mathematics behind the scenes, alleviates the need for a private key in order to sign transactions for adding to the Qredo blockchain.

MPC is an area of cryptography where multiple independent parties cooperatively generate cryptographic primitives, such as signatures and public keys etc. Two parties compute shared functions using sub-steps that protect either party from revealing their secrets.

MPC Protocol for Generating a Public Key
----------------------------------------

The MPC protocol generates a public key that allows a wallet to be locked/ unlocked and stored as a transaction on the Qredo blockchain. The MPC protocol runs when:

*   money is added to a wallet address on Qredo.
    
*   funds are to be settled outside of Qredo.
    

However, the MPC protocol is not run when money is transferred from one Qredo user to another.

How the MPC Avoids the Need for a Private Key
---------------------------------------------

The public key needs to be signed in both these instances. Although in most transactions a private key is needed for signing, in Qredo this is not required. The MPC protocol through its mathematics uses a signature generation mechanism employing the shared secrets without having to generate a public key. Shared secrets that are stored in the secure enclave on each node of each hardware appliance in globally-distributed Tier-4 datacenters.

MPC Communication Flow
----------------------

The MPC communicates with the watcher service and blockchain validator nodes (or computers) within each data center that it is deployed in. More details on the role of the MPC with the other nodes is described in the  
[Qredo Network](https://qredo.atlassian.net/wiki/spaces/QD/pages/121865074/Qredo+Network)

An MPC node is an MPC client or MPC server in a Qredo appliance that is housed in a Tier-4 data center. There is a server controller and client controller that manages communication. When the protocol is run, key data ,which needs to be encrypted, is generated from various cryptography algorithms.

1.  The client and server each generate their respective key material.
    
2.  The client and server each generate a separate AES key.
    
3.  The client and server encrypt the key material with an AES key and stores the data in an AWS database.
    
4.  The AES key is encrypted for all the client and server nodes on the network, which is then stored in an AWS database.
    

When proving ownership of the public key, all the keys are decrypted.

