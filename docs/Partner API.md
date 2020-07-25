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

* Become a developer on the Qredo network by [signing up for the Partner API](#sign-up-for-the-partner-api)
* [Connect to the Partner API](#connect-to-the-partner-api) using an API key for use in the demo environment
* Familiarise yourself with the API from these parts of the page: [API endpoints](#api-endpoints) and [quick-start guide](#quick-start-guide)
* Test the API using the [Swagger UI](https://partner-api.qredo.network/)
* [Set up the Live](#set-up-live) environment

Using the Qredo App
-------------------

You can use the Qredo Desktop app to help you add other users as trusted parties, where they are ordained as custodians. If these users do not exist in the app, you will need to register these users. For each trusted party user, you use the Qredo Signing app to make one-tap approvals via the phone. 
    
Sign Up for the Partner API
----------------------------

1. Go to **Settings** > **Partner API**.  

![Billing](/doc-images/partnerapi2.png)

3. Read through the descriptions on the API and click **Apply**.
4. Fill out the form to apply for the Partner API and click **Submit.**

After a confirmation message appears, the Partner API screen shows the **Generate Key** button for connecting to the API.

![partnerapi](/doc-images/generatekeyimage.png)

Connect to the Partner API
--------------------------

The Partner API key is a security feature that ensuring that only you can access the Partner API endpoints. You generate an API key when connecting to the demo environment for testing; you also generate a key in the server environment for going Live. Each environment uses different keys.

:::note

*   To ensure that you complete all testing before going Live, you must ensure that you generate the API key for the demo environment first.
*   You must ensure that API keys are not distributed to another party.
*   You must not add any of the API keys to parts of a program where it is not required, e.g., embedded directly in to the code of a program.
:::

### Generate an API Key

1. Click **Generate Key**. In the New Partner API Key screen, the Key ID and Partner API Key show.

![partnerapi](/doc-images/apikeypartner.png)

2. Click **Copy.**

:::note
If you have lost your API key, you can return to the Settings page in the Qredo app to generate a new key. 

1.  On the Settingss page, click **Regenerate** Key.
2.  Click **Copy** in the New Partner API Key screen.
:::

### Add Key to Demo Environment

Once you have generated the API key, you add it to the demo environment area in the Swagger UI. The key is written to HTTP headers for connecting securely to the endpoints in the demo environment. 

The following is an example request header in cURL format (obtainable from the Swagger UI):

```
curl -X GET "https://demo-api.qredo.net/api/v1/p/company/1f4s2r1NG4E1gZmoeXQBJo9MAww" -H "accept: application/json" -H "X-API-KEY: eyJrZXlfaWQiOiJBek13cFhDNFVoQWhwUSIsImtleSI6Im9GX0ZKUGthT25FdTd1VEU0czR1VDBrd3hqajgxUWJkRDhaOE9vXzhZdlUifQ"
```

1. Access the Partner API at https://partner-api.qredo.network/.
2. Choose the URL.
   - Copy this URL to the address bar: [https://demo-api.qredo.net/api/v1/p] or 
   - Select [https://demo-api.qredo.net(BasePath)] - **Demo Server** from the server list.
3. Click **Authorise**.
4. Paste the generated API key in the box.

API Endpoints
-------------

Once connected to the API, you have access to all the endpoints. 

| **Endpoint** | **Description** | 
| --- | --- |
| Company | A Company is an entity on the Qredo Network. Within a company is the holding and one or more funds. You create one or more companies, update each company, and search companies by entering part of the company name.  A company can also be a trusted party to another company. | 
| Trusted Network | A trusted network lets you add other trusted parties. These can include other companies, e.g., exchanges for an institution. Users can also be trusted parties, typically those for the companies you created as trusted parties. You can also find various trusted parties (company and users), and delete a trusted party. | 
| Holding | This is information on all the assets for a company on the Qredo network contained in the company's funds. | 
| Fund | A fund contains assets and custody policies. You can find information on the fund and the deposit address. For an individual fund, you can add withdrawal addresses. | 
| Transfer | Transfers let you move money one trusted party to another on the Qredo network. You can add a new transfer and find out the transfer status. |
| Withdrawal | Withdrawals let you send money to a different cryptocurrency address where it is removed from the Qredo blockchain. Once out of the Qredo blockchain, the money is no longer subject to the custody rules of the Qredo Network. You can add a new withdrawal address and find out the withdrawal status. | 


### Endpoint Methods

The following is a summary of the methods used by each endpoint. 

| **Endpoint** | **POST** | **PUT** | **DELETE** | **GET** |
| --- | --- | --- | --- | --- |
| Company | YES | YES | NO  | YES |
| TrustedNetwork | YES | NO  | YES | YES |
| Holding | YES | NO  | NO  | NO  |
| Fund | YES | NO  | NO  | YES |
| Transfer | YES | NO  | NO  | YES |
| Withdrawal | YES | NO  | NOpro | YES |

### Parameters

GET method parameters are passed in the query string of the URL. All other request parameters are sent in the request body and use 'application/json'.


Quick-Start Guide
-----------------

This quick-start guide shows you how to build your Qredo network programmatically using these endpoints through the Swagger UI. 

*   Create Company    
*   Add Trusted Party    
*   Add Fund    
*   Get deposit address    
*   Add funds to the deposit address
    

### Create Company

You can create a company by adding basic information in a POST request. The POST request returns the reference (`ref`) and `company_id`. Each request lets you create one company. To help you enter data quicker, some of the values are already prepopulated in the Swagger UI.

You repeat the process to create multiple companies as trusted parties, which form part of your trusted network on Qredo.

In this example, a new company called John Doe Corp is entered in `name`. This company is based in Brimingham, UK with the the `domain` of johndoe.co.uk.

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

You repeat the process to create ACME CORP as a company.

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

Using the `company_id` for John Doe Group, you can add ACME Corp as a trusted party. For the trusted party of 'type' 'company', you specify the web address. 

Using the 'company_id' of ACME corp, you add a trusted user as a trusted party for that company, and state the email address. In this example, you add Izumi Katsuyoshi with the email address of IKatsuyoshi@gmail.com as the user.

The trusted party that is a user must have been added to the Qredo network through the Qredo Desktop app. The response indicates that the message is successful. When adding the trusted party using the below request, they receive an approval request on the Qredo Mobile app. Once approved, you will be able to find the trusted party when running a 'Returns All trusted parties for a company' request. 

You first enter **9827feec-4eae-4e80-bda3-daa7c3b97ad1** for John Doe Group in Swagger and the following request:

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


You then enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for ACME corp and the following request:

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


### Return all trusted parties for a company Request

This endpoint shows details of the trusted parties that exist in a company. You should also use the endpoint to find out the 'trusted_entity_id' of a trusted party user that you want to include as a member of a custody group for creating a fund.  

In this example. you obtain the trusted party user of Izumi Katsuyoshi that you added in 'Add trusted party'.

You enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for ACME corp and the following request:

#### Request

```
https://demo-api.qredo.net/api/v1/p/company/1f4sDiEGYNGJiGli31MDgzkRj3F/trustedparty
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

A fund is the organisational unit for assigning portfolios. Each fund includes custody groups containing members. You select the members from the trusted party users that you previously added. Custody group members are nominated as custodians where their signatures are needed to approve transactions. These include:

*   `custodygroup_withdraw` Custody group for a withdrawal
*   `custodygroup_tx` Custody group for a transfer
    
:::info
Custody groups cannot be modified. 
:::

A fund includes a 'threshold' that determines how many custodian signatures from custody group members are needed for a transaction of a particular type to take place. Each fund you create includes one or more assets. 

The response shows an assigned 'fund_id' and IDs assigned to each custody group. 

This examples includes the `custodygroup_withdraw` group with a `threshold` of 1 that contains 1 `member`. There is the `custodygroup_tx` group that also has a `threshold` of 1 with 1 `member`. This example fund contains `BTC-TESTNET`.

The fund is added to 'company_id:' "1fB50nbY9Tw2TT12K6VH46gDKWE".

You enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for ACME corp and the following request.


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

You can obtain the deposit addresses associated with the fund and find out the balance and the asset of the fund. 

You specify the `company_id` for the trusted party and the `fund_id`.

1. Enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for the 'company_id' of ACME corp.

2. Enter **1dnfLZolYD72zasqtmtTXXoaNNJ** in Swagger for the 'fund_id' of ACME corp.


#### Request

```
https://demo-api.qredo.net/api/v1/p/company/1f4sRjsZD612GdSvokktFReylZp/fund/1f5xeLmyhXrEJNqlje2bVNjPG2S/deposit
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

As well as the API key, you generate a public key that is added to the Swagger UI. The public key allows a signature to be generated for signing each request, and is applicable to these areas: 

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contained added data.

The following http headers are added to each request:

'x-sign:' the signature
'x-nonce:' the nonce used in the signature

The signature is in the base64 url safe encoding (RFC 4648).

1. [Generate an API Key](#generate-an-api-key)
2. Generate a public and private key pair using openssl. 

```
openssl genrsa -out private.pem 2048
```
3. Extract the public key from the key pair.

```
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```
4. Access the Partner API at https://partner-api.qredo.network/.
5. Choose a URL.
   - Copy this URL to the address bar: [https://api.qredo.net/api/v1/p] or 
   - Select [https://api.qredo.net(BasePath)] - **API Server** from the server list.
6. Click ***Authorise**.
7. Paste the generated API key in the box.
8. Add the public key.
