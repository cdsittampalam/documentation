---
id: Partner API
---

About
-----

Qredo’s Partner API enables authorized Qredo Partners to operate the Qredo Platform programmatically from their application. OMS and EMS ISVs, Exchanges and other financial service providers can create accounts, initiate transactions on behalf of users, and approve transactions where they have been ordained as a Custodian over an end user's or corporate user’s fund.

The features of the Qredo Platform are summarised as follows:

*   Institutional-grade DeFi platform    
*   Secure your customer’s digital assets    
*   Offers MPC secured fund management    
*   Hardware security hardened network    
*   Multi-custodian signature capable    
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


Where to Go?
------------

* Become a developer on the Qredo network by [signing up for the Partner API](#sign-up-for-the-partner-api).
* [Connect to the Partner API](#connect-to-the-partner-api) using an API key for use in your development environment.
* Familiarise yourself with the API from these parts of the page: [API endpoints](#api-endpoints) and [quick-start guide](#quick-start-guide).
* Refer to the [Reference Docs](/api) to help you test and develop knowledge.
* [Set up the Live](#set-up-live) environment once ready to Go-Live.

Using the Qredo Apps
--------------------

The Partner API is used together with the Qredo Wallet App and the Qredo Signing App for functions around Trusted Parties and custodians. Users that are Trusted Parties can be ordained as Custodians, or be counterparties to a trade initiator in a transfer.

Users that are added as Trusted Parties need to have been registered on Qredo via the Qredo Wallet App. For more details on registration, refer to the [Getting Started](/docs/Getting%20Started) page.

The Partner API only permits custodian approvals from the Qredo Signing App on your phone. When users are added as Trusted Parties through the Partner API, they need to accept the invite through the Qredo Signing App. When ordained as custodians, they also need to approve transfer and withdrawal functions from the mobile app. This image shows how the phone app appears when a custodian approves a withdrawal transaction.

![ledger](/doc-images/apprtransfer.png)

Sign Up for the Partner API
----------------------------

1. Go to **Settings** > **Partner API**.  

![Billing](/doc-images/partnerapi3.png)

3. Read through the descriptions on the API and click **Apply**.
4. Fill out the form to apply for the Partner API and click **Submit.**

Both the Production and Sandbox API form are enabled.

![partnerapi](/doc-images/generatekeyimage1.png)

Add Keys to the Environments
----------------------------

Keys are a security feature which ensures that only you can connect to the endpoints in the relevant environments. the Sandbox environment for testing and the Production environment for running it Live. 

:::note

*   You must make sure that API keys are not distributed to another party.
*   You must not add any of the API keys to parts of a program where it is not required, e.g., embedded directly in to the code of a program.
:::

### API Key
The API key is an alphanumeric ID that is used for authentication and is added to the header section of the web page. 

### Private and Public Key Combination

You also need to generate an RSA public key and private key pair. This allows every request in the API to be
signed with a private key in order to generate a signature. The public and private key provides an extra level of security over the API key. 

#### About the Signature

The signature is applicable to these areas:

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contain added data.

To formulate the signature, these three components should be concatenated in that order without any kind of delimiters, signed with the private key
and the result encoded in base64 url safe encoding (RFC 4648).

The following http headers are added to each request:

'x-sign:' the signature itself
'x-nonce:' the nonce used in the signature

The signature is in the base64 url safe encoding format (RFC 4648).

### Sandbox Keys

1. In the Sandbox section, click **Generate Key**. In the New Partner API Key screen, the Key ID and Partner API Key show.

![partnerapi](/doc-images/apikeypartner.png)

2. Click **Copy.**

3. Click Generate.

4. Enter the Public Key in the Public Key field. See generate public key.

5. Click Generate.


### Production Keys

1. In the Production section, click **Generate Key**. In the New Partner API Key screen, the Key ID and Partner API Key show.

![partnerapi](/doc-images/apikeypartner.png)

2. Click **Copy.**

3. Click Generate.

4. Enter the Public Key in the Public Key field. See generate public key.

5. Click Generate.

:::note
If you have lost your API key, you can return to the Settings page to generate a new key.

1.  Click **Regenerate** Key.
2.  Click **Copy** in the New Partner API Key screen.
:::

#### Generate Key Pair

1. Generate the key pair by entering this command in openssl.

``openssl genrsa -out private.pem 2048``

2. Extract the public key from the key pair.

``openssl rsa -in private.pem -outform PEM -pubout -out public.pem``

:::info
private.pem is the private key and public.pem is the public key
:::

### Send Keys to Qredo

When you have generated the keys, please send the public and private keys via email to Qredo (support@qredo.com) for adding to your environments.


### Add Key to your Development Environment

Once you have generated the API key, you add it to your development environment. The key is written to HTTP headers for connecting securely to the different endpoints.

The following is an example request header in cURL format. You add the API key value to X-API-KEY at the end of the request. In this example, it is Create Company.

```
curl -X GET "https://yourcompany.net/api/v1/p/company/1f4s2r1NG4E1gZmoeXQBJo9MAww" -H "accept: application/json" -H "X-API-KEY: eyJrZXlfaWQiOiJBek13cFhDNFVoQWhwUSIsImtleSI6Im9GX0ZKUGthT25FdTd1VEU0czR1VDBrd3hqajgxUWJkRDhaOE9vXzhZdlUifQ"
```

What does the signature and nonce look like?

API Endpoints
-------------

Once connected to the Partner API, you have access to all the endpoints.

| **Endpoint** | **Description** |
| --- | --- |
| Company | A Company is an entity on the Qredo Network. Within a company is the holding that contains one or more funds. You create one or more companies, update each company, and search companies by entering part of the company name.  A company can also be a trusted party to another company. |
| Trusted Network | A Trusted Network lets you add other Trusted Parties. These can include other companies, e.g., exchanges for an institution. Users can also be Trusted Parties, e.g., those for the companies you created as Trusted Parties. You can also find various Trusted Parties (company and users), and delete a trusted party. |
| Holding | This is information on all the assets for a company on the Qredo network. |
| Fund | A fund contains assets and custody policies. You can find information on the fund and the deposit address. For an individual fund, you can add withdrawal addresses. |
| Transfer | Transfers let you move money to another trusted party on the Qredo network. You can add a new transfer and find out the transfer status. |
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

You can create a company by adding basic information in a POST request. The request returns the reference (`ref`) and `company_id`. Each request lets you create one company.

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

Using the `company_id` of John Doe Group, you add ACME Corp as a trusted party. For the trusted party of `type` that is `company`, you specify the web address.

Using the `company_id` of ACME Corp, you add a user as a trusted party for that company, and state the email address. In this example, you add the email address of Izumi Katsuyoshi [IKatsuyoshi@gmail.com].

The response returned from the request indicates that the message is successful.

A trusted party that is a user must have been added to the Qredo Network through the Qredo Desktop app. When adding the trusted party using the below request, they receive an approval request on the Qredo Signing app. Once approved, you will be able to find the trusted party when running a Returns All trusted parties for a company request.

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

This endpoint shows details of the Trusted Parties that exist in a company. You should also use the endpoint to find out the `trusted_entity_id` of a trusted party user that you want to include as a member of a custody group for creating a fund.  

In this example. you obtain the trusted party user of Izumi Katsuyoshi that you added in Add trusted party.

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

A fund is the organisational unit for assigning portfolios. A company can have 1 or more funds. Each fund includes custody groups containing members. You select the members from the trusted party users that you previously added. Custody group members trusted party users that are nominated as custodians, where their signatures are needed to approve transactions. These include:

*   `custodygroup_withdraw` custody group for a withdrawal
*   `custodygroup_tx` custody group for a transfer

:::info
Custody groups cannot be modified.
:::

A fund includes a `threshold` that determines how many custodian signatures from custody group members are needed for a transaction of a particular type to take place. Each fund you create includes one or more assets.

The response shows an assigned `fund_id` and IDs assigned to each custody group.

This example includes the `custodygroup_withdraw` group with a `threshold` of 1 that contains 1 `member`. There is the `custodygroup_tx` group that also has a `threshold` of 1 with 1 `member`. This example fund contains `BTC-TESTNET`. As members need to be trusted party users, you add the 'trusted_entity_id' as a value in the '"members"' array.

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

You can obtain the deposit address associated with the fund, and find out both the balance and asset of the fund.

You specify the `company_id` for the trusted party and the `fund_id`.

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

For setting up the Partner API on your Live environment, 


### About the Signature
The signature is applicable to these areas:

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contain added data.

To formulate the signature, these three components should be concatenated in that order without any kind of delimiters, signed with the private key
and the result encoded in base64 url safe encoding (RFC 4648).

The following http headers are added to each request:

'x-sign:' the signature itself
'x-nonce:' the nonce used in the signature

The signature is in the base64 url safe encoding format (RFC 4648).


