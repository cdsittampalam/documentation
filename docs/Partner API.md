---
id: Partner API
---

About
-----

Qredo’s Partner API enables authorized Qredo Partners to operate the Qredo Platform programmatically from their application. OMS and EMS ISVs, Exchanges and other financial service providers can create accounts, initiate transactions on behalf of users, and approve transactions where they have been ordained as a Custodian over an end user's or corporate user’s fund.

The Qredo Platform delivers the following:

*   Institutional-grade DeFi platform    
*   Secure your customer’s digital assets    
*   Offer MPC secured fund management    
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

You can use the Qredo Desktop app to help you add other users as trusted parties, where they are ordained as custodians. If these users do not exist, you will need to register these users. For each trusted party user, the Qredo Signing app is needed to make one-tap approvals via the phone. 
    
Sign Up for the Partner API
----------------------------

1. Go to **Settings** > **Partner API**.  

![Billing](/doc-images/partnerapi2.png)

3. Read through the descriptions on the API and click **Apply**.
4. Fill out the form to apply for the Partner API and click **Submit.**

After a confirmation message appears, the Partner API screen shows the **Generate Key** button allowing you to connect to the API.

![partnerapi](/doc-images/generatekeyimage.png)

Connect to the Partner API
--------------------------

The Partner API key is a security feature that ensures that only you can access the Partner API endpoints. You generate an API key when you want to connect to the demo environment for testing; you also generate a key in the server environment for going Live. Each environment uses different keys.

:::note
Notes on Managing your API Key

*   To ensure that you complete all testing before going Live, you must ensure that you generate the API key for the demo environment first.
*   You must ensure that the API keys are not distributed to another party.
*   You must not add any of the API keys to parts of a program where it is not required, e.g., embedded directly in to the code of a program.
:::

### Generate an API Key

1. Click **Generate Key**. In the New Partner API Key screen, the Key ID and Partner API Key show.

![partnerapi](/doc-images/apikeypartner.png)

2. Click **Copy.**
 Generating a new key is required if you lose the original key.

:::note
If you have lost your API key and need to replace it, you can return to the Settings page in the Qredo app to generate a new key. 
The Qredo server does not store the API key on the page. Thus, each time you arrive back to the Partner API page, you need to regenerate a new key.

On the Settings page, your current API key appears hashed out. The new key only appears when you regenerate the key.

1.  Click **Regenerate** Key.
2.  Click **Copy** in the New Partner API Key screen.
:::

### Add Key to Demo Environment

Once you have generated the API key, you add it to the demo environment area in the Swagger UI. The key is written to HTTP headers to ensure you can securely connect to the endpoints in the demo environment. 

The following is an example request header in cURL format:

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
| Trusted Network | A trusted network lets you add other trusted parties. These can include other companies, e.g., exchanges for an institution. Trusted parties can also include users. You can also find various trusted parties for a company, and delete a trusted party. | 
| Holding | This is information on all the assets for a company on the Qredo network contained in the company's funds. | 
| Fund | A fund contains assets and custody policies. You can also: 
* get existing funds
* search for funds on the network
* find the deposit address for a fund 
* add withdrawal addresses to a individual fund. | 
| Transfer | Transfers is where money that is on the Qredo network is moved from one trusted party to another. You can add a new transfer and find out the transfer status. |
| Withdrawal | Withdrawals is where money in a fund is sent out of the Qredo blockchain to a different cryptocurrency address. You can add a new withdrawal and find out the withdrawal status. | 


### Parameters

GET method parameters are passed in a query string rather than the body of the URL. All other request parameters are sent in the request body and use 'application/json'.

### Endpoint Methods

The following is a summary of the endpoints and the methods they handle (POST, PUT, DELETE, and GET).

| **Endpoint** | **POST** | **PUT** | **DELETE** | **GET** |
| --- | --- | --- | --- | --- |
| Company | YES | YES | NO  | YES |
| TrustedNetwork | YES | NO  | YES | YES |
| Holding | YES | NO  | NO  | NO  |
| Fund | YES | NO  | NO  | YES |
| Transfer | YES | NO  | NO  | YES |
| Withdrawal | YES | NO  | NOpro | YES |


Quick-Start Guide
-----------------

This quick-start guide shows users how to build your Qredo network programmatically using these endpoints. 

*   Create Company    
*   Add Trusted Party    
*   Add Fund    
*   Get deposit address    
*   Add funds to the deposit address
    

### Create Company

You can create a company by adding basic information in a POST request. The POST request returns the reference (`ref`)and `company_id`. Each request allows you to create one company. To help you enter data quicker, some of the values are already prepopulated.

The 'country' ID you enter must conform to the ISO 3166-1 country code.

You can repeat the process to create multiple companies. Other companies you create can be used as a trusted party in your trusted network.

In this example, a new company called John Doe Corp is entered in `name`. This is based in Brimingham, UK with the the `domain` of johndoe.co.uk.

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

### Add Trusted Party

Using the `company_id` for the company you created, you can add either a company or user as a trusted party. If the trusted party is of 'type' 'company', you have to specify the web address. If the trusted party is of 'type' 'user', you have to state the email address. In this example, you add Izumi Katsuyoshi with the email address of IKatsuyoshi@gmail.com as the user, and acme.com as the company.

Users would have been added to the Qredo network through the Qredo Signing app. When add a trusted party that is a user, they receive an approval request on the Qredo Mobile app. Once approved, you will be able to find the trusted party when running a 'Returns All trusted parties for a company' request. 

#### Request

```
{
  "address": "acme.com",
  "type": "company"
  }
```

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

This endpoint lets you find out details of the trusted parties that exist in a company. Using the endpoint is also useful for finding out the 'trusted_entity_id' of a trusted party user that you want to include as a member of a custody group when you create a fund.  

In this example. you use make a request to obtain the trusted party user of Izumi Katsuyoshi that you added in 'Add trusted party'.

#### Request

```
https://demo-api.qredo.net/api/v1/p/company/1f4sDiEGYNGJiGli31MDgzkRj3F/trustedparty
```

#### Response

```
{
  "company_id": "1f4sRjsZD612GdSvokktFReylZp",
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

A fund is the organisational unit that customers assign their portfolios into. Each fund includes custody groups containing members that are added to a fund. You select the members from the trusted party users that you have added. Custody group members are those that are nominated as custodians where their signatures are needed to allow the movement of money in the form of transfers and withdrawals. These include:

*   `custodygroup_withdraw` Custody group for a withdrawal
    
*   `custodygroup_tx` Custody group for a transfer
    
:::info
Custody groups cannot be modified. 
:::

A fund also includes a 'threshold' that determines how many custodian signatures from custody group members that are needed for the asset movement to take place. Each fund you create also includes one or more assets. 

This examples includes the `custodygroup_withdraw` group with a `threshold` of 1 that contains 1 `member`. There is the `custodygroup_tx` group that also has a `threshold` of 1 with 1 `member`. This example fund contains `BTC-TESTNET`.

The fund is added to 'company_id:' "1f4sRjsZD612GdSvokktFReylZp".

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

The response shows an assigned 'fund_id' and IDs assigned to each custody group. 

```
{
"fund_id": "1dnfLZolYD72zasqtmtTXXoaNNJ",
"custodygroup_withdraw": "1dnfLYHOGn8gScmInkMXSPzitj5",
"custodygroup_tx": "1dnfLeHXkaxQPs2v5kvxglwKTKV"
}
```

### Get Deposit Address

Before performing trading functions, you can obtain the deposit addresses associated with the fund. This is useful if you want to add funds, e.g., for testing purposes.

You specify the `company_id` for the trusted party and the `fund_id` to obtain a list of deposit addresses.

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

You generate a public key that is added to the Swagger UI. The public key enforces security by providing a signature in order to sign each request. 

The signature is used to sign areas where security needs to be applied including:

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contained added data.

The following two http headers are added to each request:

'x-sign:' the signature
'x-nonce:' the nonce used in the signature

The signature is in base64 url safe encoding (RFC 4648).


1. Follow the steps in [Generate an API Key](#generate-an-api-key)
2. Generate a public and private key pair on the command line using openssl. 

```
openssl genrsa -out private.pem 2048
```
3. Extract the public key from the key pair using the command line.

```
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```
4. Access the Partner API at https://partner-api.qredo.network/.
5. Choose a URL.
   - Copy the following URL to the address bar: [https://api.qredo.net/api/v1/p] or 
   - Select [https://api.qredo.net(BasePath)] - **API Server** from the server list.
6. Click ***Authorise**.
7. Paste the generated API key in the box.
8. Add the public key.
