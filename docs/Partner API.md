---
id: Partner API
---

About
-----

Qredo’s Partner API enables authorized Qredo Partners to operate the Qredo Platform programmatically from their application. OMS and EMS ISVs, Exchanges and other financial service providers can create accounts, initiate transactions on behalf of users, and approve transactions where they have been ordained as a Custodian over an end user's or corporate user’s fund.

The features of the Qredo Platform are summarised as follows:

*   Cross-chain decentralised custody of digital assets
*   Trade credit network
*   Institutional-grade DeFi platform   
*   No wallet prefunding 
*   MPC secured fund management    
*   Hardware security hardened network    
*   Multi-custodian signatures    
*   Instantiate flexible governance policies    
*   Near instant digital asset delivery    
*   Eliminate counterparty risk

Eligibility Criteria
--------------------

Qredo’s Partner program is for those who are committed to building a new era in capital markets for institutional-grade decentralized financial applications. We seek partners who think about the following criteria:

*   Composability - Are you developing other applications, centralized or decentralized, that can add additional value to joint customers?   
*   Integrity - Do you value the safety of your customer’s digital assets as if they were your own digital assets?    
*   Extensibility - Is your platform extensible, so that the value chain created by joint works can be extended by other DeFi applications?

If so, please get in touch.

Using the Qredo Apps
--------------------

The Partner API is used together with the Qredo Wallet App and the Qredo Signing App for functions around Trusted Parties and custodians. Users that are Trusted Parties can be ordained as Custodians, or be counterparties to a trade initiator in a transfer.

Users that are added as Trusted Parties need to have been registered on Qredo via the Qredo Wallet App. For more details on registration, refer to the [Getting Started](/docs/Getting%20Started) page.

The Partner API only permits custodian approvals from the Qredo Signing App on your phone. When users are added as Trusted Parties through the Partner API, they need to accept the invite through the Qredo Signing App. When ordained as custodians, they also need to approve transfer and withdrawal functions from the mobile app. This image shows how the phone app appears when a custodian approves a withdrawal transaction.

![ledger](/doc-images/apprtransfer.png)

Where to Go?
------------

The following is a summary of steps for using the Partner API. 

* [Sign up for the Partner API](#sign-up-for-the-partner-api) to become an API developer on Qredo.
* [Set up the sandbox keys](#set-up-the-sandbox-keys) which are used for authentication when testing the API.
* [Authenticate](#authenticate-with-the-api) with the API using the keys and [generate a signature and nonce value](#generate-signature-and-nonce-value).  
* [Set up the production keys](#set-up-live) for the production environment to go Live.

While testing and using the API, learn about the [API endpoints](#api-endpoints), follow the steps in the [quick-start guide](#quick-start-guide), and refer to the [Reference Docs](/api).

Setting up the sandbox and production keys will require you to generate a public and private key pair via OpenSSL. You will also need to use
signature and cryptographic nonce generation tools specific to your programming environment. If necessary, take time to familiarise yourself with these tools.  

Further Assistance
------------------

For further assistance in using the Partner API, please email support@qredo.com.

Sign Up for the Partner API
----------------------------

You sign for the Partner API in the Qredo app.

1. Ensure that you are logged in as a Qredo user.
2. Go to **Settings** > **Partner API**.  

![Billing](/doc-images/partnerapi3.png)

3. Read through the descriptions on the API and click **Apply**.
4. Fill out the form to apply for the Partner API and click **Submit.**

The Partner API page shows sections for the Production and Sandbox API.

![partnerapi](/doc-images/partnerapi-default.png)

Set Up the Sandbox Keys
-----------------------

You first generate an API key, and then upload a generated public key. 

The API key is an alphanumeric code that allows a user to be authenticated when accessing the API endpoints. The key is written to the HTTP headers of each request.

A public key is needed to later generate a signature and the cryptographic nonce for each running request. The signature and cryptographic nonce provide extra security. 

Both the sandbox API key and the public key can only be used in the sandbox environment only.   

1. In the Sandbox section of the Partner API page, click **Generate API Key**. The Sandbox API Key screen appears with the generated Partner API Key and a corresponding Key ID.

![sdbox](/doc-images/sdbox.png)

2. Note down the API key.

3. Click **Copy to Clipboard** if you want the key to available elsewhere, e.g., a password manager.

4. In the Sandbox section, click **Upload Public Key**. The Sandbox Public Key window shows.

![sandbox](/doc-images/publickeysd.png)

5. Paste the public key and click **Upload**. 

For public key generation, see [generate key pair](#generate-key-pair).

:::note

*   You must make sure that the keys are not distributed to another party.
*   You must not add any of the keys to parts of a program where it is not required, e.g., embedded directly in to the code of a program.
:::

#### Generate Key Pair

1. Generate the key pair by entering this command in openssl.

``openssl genrsa -out private.pem 2048``

2. Extract the public key from the key pair.

``openssl rsa -in private.pem -outform PEM -pubout -out public.pem``

:::info
private.pem is the private key and public.pem is the public key.
:::


Authenticate with the API
-------------------------

Once you have generated the sandbox keys, you need to use the API key to authenticate with the Partner API. You add the API key to your development environment. The key is written to HTTP headers for connecting securely to the different endpoints.

The following is an example request header in cURL format. You add the API key value to X-API-KEY at the end of the request. In this example, it is Create Company.

```
curl -X GET "https://yourcompany.net/api/v1/p/company/1f4s2r1NG4E1gZmoeXQBJo9MAww" -H "accept: application/json" -H "X-API-KEY: eyJrZXlfaWQiOiJBek13cFhDNFVoQWhwUSIsImtleSI6Im9GX0ZKUGthT25FdTd1VEU0czR1VDBrd3hqajgxUWJkRDhaOE9vXzhZdlUifQ"
```

Generate Signature and Nonce Value
----------------------------------

Once you have been authenticated through the Partner API, you generate a signature and nonce value. While both the private and public keys are required, the private key is used specifically for signing in order to generate a signature. The following additional http headers are added to each request:

'x-sign:' the signature itself
'x-nonce:' the nonce used in the signature

The signature is encoded in base64 url safe encoding (RFC 4648), and is applicable to these areas:

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contain added data.

### Defining a Nonce

A nonce is a number that is added to a request. The number increments by one each time a request is made. A nonce is designed to decrease the likelihood of a replay attack as shown in this example. 

#### Example

Alice sends a CreateCompany request to the API server. Bob masqerading as Alice listens to the request. Then Bob, using the obtained information, makes the same CreateCompany request to the API server pretending to be Alice.
If a nonce of 10 exists in Alice's request, the API server accepts the initial request with this number. If Bob presents 10, the API server does not accept the request.  The server knows that the nonce value has increased by 1, requires 11. 
Thus, the replay attack fails.

API Endpoints
-------------

Once connected to the Partner API, you have access to all the endpoints.

| **Endpoint** | **Description** |
| --- | --- |
| Company | A Company is an entity on the Qredo Network that is a customer account which you create on the customer's behalf. A company includes all entities for managing the Qredo network including Trusted Parties, holdings, funds, custody policies, and those for the movement of money (deposits, transfers, and withdrawals). You create any number of companies, update each company, and search companies by entering part of the company name.  A company can also be a Trusted Party to another company. Note that for all requests except CreateCompany, you include the `company_id` to ensure that all data can be manipulated for that company. |
| Trusted Network | A Trusted Network is needed in order to use the Qredo Network, including for the creation of funds and for the movement of assets. A Trusted Network lets you add other Trusted Parties. These can include other companies, e.g., exchanges for an institution. Users can also be Trusted Parties, e.g., those for the companies you created as Trusted Parties. You can also find various Trusted Parties, and delete a Trusted Party. Note that you cannot delete a Trusted Party if it has been assigned to a fund.|
| Holding | This is information on all the assets for a company on the Qredo network. Each holding is divided according to the asset type. Each holding entry also includes the balance for that asset, allowing you to track funds coming in and out.|
| Fund | A fund is a wallet that contains assets, addresses, and custody policies. You can create a small or large number of funds depending on your requirements. For each fund, you specify the asset and the custody policies. Custody policies for deposits and withdrawals must exist for both a fund with multiple custodians, or for a single user that self-manages custody. You can also find information on the fund and the deposit addresses. For an individual fund, you can add withdrawal addresses.|
| Transfer | Transfers let you move money to another Trusted Party on the Qredo network. You can add a new transfer and find out the transfer status. |
| Withdrawal | Withdrawals let you send money to a different cryptocurrency address. Once money is withdrawn, it is off the Qredo blockchain and the custody rules no longer apply. You can add a new withdrawal address, and find out the withdrawal status. |

### Endpoint Methods

The following is a summary of the methods used by each endpoint.

| **Endpoint** | **POST** | **PUT** | **DELETE** | **GET** |
| --- | --- | --- | --- | --- |
| Company | YES | YES | NO  | YES |
| Trusted Network | YES | NO  | YES | YES |
| Holding | YES | NO  | NO  | NO  |
| Fund | YES | NO  | NO  | YES |
| Transfer | YES | NO  | NO  | YES |
| Withdrawal | YES | NO  | NO | YES |

### Parameters

GET method parameters are passed in the query string of the URL. All other request parameters are sent in the request body and use `application/json`.


Quick-Start Guide
-----------------

This quick-start guide shows you how to build your Qredo network programmatically using these endpoints.

*   Create Company    
*   Add Trusted Party    
*   Add Fund    
*   Get deposit address    
*   Add funds to the deposit address


### Create Company

You can create a company by adding basic information in a POST request. The request returns the reference (`ref`) and the `company_id`. The 'company_id' is important as it uniquely identifies the company on the Qredo Network. Each request lets you create one company.

You repeat the process to create multiple companies as Trusted Parties, which form part of your Trusted Network on Qredo.

In this example, you create a company called John Doe Corp that includes a reference number. This company is based in Birmingham, UK with the `domain` of johndoe.co.uk.

#### Request

```
{
  "name": "John Doe Group",
  "city": "Birmingham",
  "country": "UK",  
  "domain": "johndoe.co.uk",
  "ref": "9827feec-4eae-4e80-bda3-daa7c3b97add"
}
```

#### Response


```
{
  "ref": "1eoq9DPiGaRvpbyp6L2Vai4uIU2",
  "company_id": "9827feec-4eae-4e80-bda3-daa7c3b97ad1"
}
```

You repeat the above step to create ACME CORP as a company.

#### Request

```
{
  "name": "ACME Corp",
  "city": "London",
  "country": "FR",
  "domain": "acmecorp.com",
  "ref": "9821feec-4eae-4e80-bda3-daa7c3b97acd"
}

```

#### Response

```
{
  "company_id":"1fB50nbY9Tw2TT12K6VH46gDKWE",
  "ref":"9821feec-4eae-4e80-bda3-daa7c3b97acd"
}
```


### Add Trusted Party

Using the `company_id` of John Doe Group, you add ACME Corp as a Trusted Party. For the Trusted Party of `type` that is `company`, you specify the web address.

Using the `company_id` of ACME Corp, you add a user as a Trusted Party for that company, and state the email address. In this example, you add the email address of Izumi Katsuyoshi [IKatsuyoshi@gmail.com].

The response returned from the request indicates that the message is successful.

A Trusted Party that is a user must have been added to the Qredo Network through the Qredo Desktop app. When adding the Trusted Party using the below request, they receive an approval request on the Qredo Signing app. Once approved, you will be able to find the Trusted Party when running a Returns All Trusted Parties for a company request.

You first enter **9827feec-4eae-4e80-bda3-daa7c3b97ad1** in the URL for John Doe Group and the following request:

#### Request

```
{
  "address": "acme.com",
  "type": "company"
  }
```
#### Response
```
{
 "code":200,"msg":"OK"
  }
```


You then enter **1fB50nbY9Tw2TT12K6VH46gDKWE** for ACME Corp in the URL and the following request:

```
{
  "address": "IKatsuyoshi@gmail.com",
  "type": "user"
  }
```

#### Response
```
{
 "code":200,"msg":"OK"
  }
```


### Return all trusted parties for a company

This endpoint shows details of the Trusted Parties that exist in a company. You should also use the endpoint to find out the `trusted_entity_id` of a Trusted Party user that you want to include as a member of a custody group for creating a fund.  

In this example. you obtain the Trusted Party user of Izumi Katsuyoshi that you added in Add trusted party.

You enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in the URL and the following request:

#### Request

```
https://api.qredo.network/company/1f4sDiEGYNGJiGli31MDgzkRj3F/trustedparty
```

#### Response

```
{
  "company_id": "1fB50nbY9Tw2TT12K6VH46gDKWE",
  "total_count":1,
  "list":
     [
       {
         "trusted_entity_id":"4eWKPAjec5WRXvJbU8P58WCRnfXQ77WYUtR91NWcPNvJ",
         "name":"Izumi Katsuyoshi",
         "address":"IKatsuyoshi@gmail.com",
         "type":"user",
         "internal":false,
         "created":1595516739
       }
     ]
}
```

### Add Fund

When adding a fund, you select the members from the Trusted Party users that you previously added. Custody group members include Trusted Party users that are nominated as custodians, where their signatures are needed to approve transactions. These include:

*   `custodygroup_withdraw` custody group for a withdrawal
*   `custodygroup_tx` custody group for a transfer

:::info
Custody groups cannot be modified.
:::

A fund includes a `threshold` that determines how many custodian signatures from custody group members are needed for a transaction of a particular type to take place. Each fund you create includes one or more assets.

The response shows an assigned `fund_id` and IDs assigned to each custody group.

This example includes the `custodygroup_withdraw` group with a `threshold` of 1 that contains 1 `member`. There is the `custodygroup_tx` group that also has a `threshold` of 1 with 1 `member`. This example fund contains `BTC-TESTNET`. As members need to be Trusted Party users, you add the 'trusted_entity_id' as a value in the '"members"' array.

The fund is added to the `company_id` of 1fB50nbY9Tw2TT12K6VH46gDKWE.

You enter **1fB50nbY9Tw2TT12K6VH46gDKWE** for ACME Corp in the URL and the following request.


#### Request

```
{
  "name": "Fund 1",
  "description": "Fund for demonstration purposes",
  "theme": 2,
  "custodygroup_withdraw": {
    "threshold": 1,
    "members": [
      "4eWKPAjec5WRXvJbU8P58WCRnfXQ77WYUtR91NWcPNvJ"

    ]
  },
  "custodygroup_tx": {
    "threshold": 1,
    "members": [
      "4eWKPAjec5WRXvJbU8P58WCRnfXQ77WYUtR91NWcPNvJ"

    ]
  },
  "assets": [
    "BTC-TESTNET"
  ]
}
```

#### Response

```
{
"fund_id": "1dnfLZolYD72zasqtmtTXXoaNNJ",
"custodygroup_withdraw": "1dnfLYHOGn8gScmInkMXSPzitj5",
"custodygroup_tx": "1dnfLeHXkaxQPs2v5kvxglwKTKV"
}
```

### Get Deposit Address

You can obtain the deposit addresses associated with the fund, and find out both the balance and asset of the fund.

You specify the `company_id` for the Trusted Party and the `fund_id`.

1. Enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in the URL for the `company_id` of ACME corp.

2. Enter **1dnfLZolYD72zasqtmtTXXoaNNJ** in the URL for the `fund_id` of ACME corp.


#### Request

```
https://api.qredo.network/company/1f4sRjsZD612GdSvokktFReylZp/fund/1f5xeLmyhXrEJNqlje2bVNjPG2S/deposit
```

#### Response

```
{   
"total_count": 0,   
"list": [     
   {       
   "asset": "BTC-TESTNET",
   "address": "n2GoFtw8aTH6yoMK9UW3fxrSp3iTL6jwUX",       
   "balance": 0.001     
    }   
  ]
}
```

Set Up Live
-----------

1. In the Production section, click **Generate Key**. In the Production API Key screen, the Key ID and Partner API Key show.

![prodapi](/doc-images/prodAPI.png)

2. Note down the API key.

3. Click **Copy to Clipboard** if you want the key to available elsewhere, e.g., a password manager.

4. In the Production section, click **Upload Public Key**. The Production Public Key window appears.

![prodpub](/doc-images/prodpub.png)

5. Paste the public key and click **Upload**. 

6. Follow the same procedures in [Authenticate with the API](#authenticate-with-the-api) and [Generate Signature and Nonce Value](#generate-signature-and-nonce-value).


:::info
You need to generate a public key and private key for the Production environment using OpenSSL. See [Generate Key Pair](#generate-key-pair) for more information.
:::




