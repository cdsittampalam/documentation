---
id: Partner API
---

About
-----

Qredo’s Partner API enables authorized Qredo Partners to operate the Qredo Platform programmatically from their application. OMS and EMS ISVs, Exchanges and other financial service providers can create accounts, initiate transactions on behalf of users, and approve transactions where they have been ordained as a Custodian over an end user's or corporate user’s fund.

For API schema and other technical documentation, please explore our [API Reference]()documentation or [Swagger UI]().

*   Institutional-grade DeFi platform    
*   Secure your customer’s digital assets    
*   Offer MPC secured fund management    
*   Hardware security hardened network    
*   Multi-custodian signature capable    
*   Instantiate flexible governance policies    
*   Near instant digital asset delivery    
*   Eliminate counterparty risk

This document explains what information partners are going to need about Qredo’s Partner API. Qredo’s Partner API is built using the REST API.

The Partner API is still work in progress. Qredo plan to add the following in future releases:

*   Client libraries    
*   Dedicated URLs for test, production and live environments
    

Eligibility Criteria
--------------------

Qredo’s Partner program is those who are committed to building a new era in capital markets for institutional-grade decentralized financial applications. We seek partners who think about the following criteria:

*   Composability - Are you developing other applications, centralized or decentralized, that can add additional value to joint customers?   
*   Integrity - Do you value the safety of your customer’s digital assets as if they were your own digital assets?    
*   Extensibility - Is your platform extensible, so that the value chain created by joint works can be extended by other DeFi applications?
    

If so, please get in touch.

How to use it
-------------

From the Partner API you can

*   [register](#how-to-register) with the Partner API on the Qredo website.
*   [connect to the Partner API](#connect-to-the-partner-api) using the API key and public key authentication mechanisms.   
*   become familiar with how the API works through [API Endpoints](api-endpoints), [Quick-Start](#quick-start-guide) and [Reference] documentation sections.
*   use the [Swagger UI](https://partner-api.qredo.network/) to test the endpoints.

You will need to use the Qredo Desktop app to help you for various functions, e.g., for finding users to add as trusted parties. For signing functions, you will need to use the Qredo Signing app.
    
How to register
---------------

Signing up to the Partner API is available for a Qredo user from the Qredo Desktop app once they have registered. Once Qredo has granted your application to be a Partner API developer, the app allows you to generate your own API Key.

1.  Ensure that are logged in to the app as a Qredo user.
2.  Go to **Settings** > **Partner API**.  

![Billing](/doc-images/partnerapi2.png)

3. Read through the descriptions on the API and click **Apply**.
4. Fill out the form to apply for the Partner API and click **Submit.**

After a confirmation message appears, the Partner API screen shows the **Generate Key** button.

![partnerapi](/doc-images/generatekeyimage.png)

Connect to the Partner API
--------------------------

From the Partner API page, you can connect to the API using the Partner API key.

The Partner API key is needed for security reasons to ensure that only you can access specific endpoints in the Partner API. The API Key is linked to your partner developer account and provides you with permission to access any endpoint in the API through the Qredo developer portal.

All users that generate an API key have the same permissions when they use the Partner API.

:::note
Notes on Managing your API Key

*   You must ensure that the API key is not distributed to another party.
*   You must not add the API key to parts of a program where it is not required, e.g., embedded directly in to the code of a program.
*   You must keep the API key carefully in a safe location.
:::

You also need to generate a public and private key combination to use with the Partner API key.

### Generate an API Key

1. Click **Generate Key**. In the New Partner API Key screen, the Key ID and Partner API Key show.

![partnerapi](/doc-images/apikeypartner.png)

2. Click **Copy.**

The Qredo server does not store the API key on the page. Thus, each time you arrive back to the Partner API page, you need to regenerate a new key. Generating a new key is required if you lose the original key.

:::note
If you have lost your API key and need to replace it, you can return to the Settings page in the Qredo app to generate a new key.

On the Settings page, your current API key appears hashed out. The new key only appears when you regenerate the key.
:::

3.  Click **Regenerate** Key.
4.  Click **Copy** in the New Partner API Key screen.

### Add a Public Key

A public key needs to be added to the Swagger UI. The public key enforces security by providing a signature in order to sign each request. 

The signature is used to sign areas where security needs to be applied including:

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contained added data.

1.  Generate a public and private key pair on the command line using openssl. 
2.  Extract the public key from the key pair using the command line.
3.  Add the public key to the partner API page.

API Endpoints
-------------

Once connected to the API, you have access to all the endpoints. You use the endpoints once you have created a company through the CreateCompany endpoint. From the Company endpoint, you manage the following endpoints:

| **Endpoint** | **Description** | 
| --- | --- |
| Company | A Company is an entity on the Qredo Network. Within a company are all the holdings and funds that are used on the Qredo Network. You create one or more companies, and update and search the companies by entering part of the company name.  A company can also be a trusted party to another company. Note that all endpoint functions require a company-id. | 
| Trusted Network | A trusted network lets you add other trusted parties. These can include other companies, e.g., Exchanges to an institution. Trusted parties can also include users. You can also find various trusted parties for a company, and delete a trusted party if needed. | 
| Holding | This is information on all the assets for a single company in the Qredo network that are within one or more funds. | 
| Fund | A fund is where you keep your assets and custody policies. You can add a fund to the Qredo network. You can also get existing funds and search for funds on the network. You can find the deposit address for a fund. For withdrawal addresses, you can add these to an individual fund. | 
| Transfer | Transfers are where money that is on the Qredo network is moved from one user to another. You can add a new transfer and find out the transfer status. |
| Withdrawal | Withdrawals is where money in a fund is sent out of the Qredo blockchain to a different cryptocurrency address. You can add a new withdrawal and find out the withdrawal status. | 


### Parameters and End Point Types

Request parameters are sent in the request body and use application/json. However, GET request parameters are passed in a query string rather than the body of the URL.

The following is a summary of the endpoints and the type of requests (POST, PUT, DELETE, and GET) they handle.

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

You can create a company by adding basic information in a POST request. The POST request returns the reference (`ref`)and `company_id`. Each request is a POST allows you to create one company. To help you enter data quicker, some of the values are already prepopulated.

The country ID you enter must conform to the ISO 3166-1 country code.

You can repeat the process to create multiple companies. Other companies you create can be used as a trusted party in your trusted network.

In this example, a new company called John Doe Corp is entered in `name`. This is based in Brimingham, UK with the the `domain` of `johndoe.co.uk`.

#### Example Request

```
{ 
  "name": "John Doe Group", 
  "city": "Birmingham", 
  "country": "UK",  
  "domain": "johndoe.co.uk",
  "ref": "9827feec-4eae-4e80-bda3-daa7c3b97add" 
}
```

#### Example Response


```
{
  "ref": "1eoq9DPiGaRvpbyp6L2Vai4uIU2",
  "company_id": "9827feec-4eae-4e80-bda3-daa7c3b97ad1
}
```

### Add Trusted Party

Using the `company_id` for the company you created, you can add either a company or user as a trusted party. You need to specify both the `address` web address for the trusted party and the `type` of trusted party either as `company` or `user`.

The users would have been added to the Qredo network through the Qredo Web App.

If you add a trusted party that is a user, you will receive an approval request on the Qredo Mobile app. Once approved, you will be able to find the trusted party on 

#### Example Request for a Company

Error rendering macro 'code': Invalid value specified for parameter 'lang'

```
{
  "address": "acme.com",
  "type": "company"
  }
```

#### Example Request for a User

Error rendering macro 'code': Invalid value specified for parameter 'lang'

```
{
  "address": "IKatsuyoshi@gmail.com",
  "type": "user"
  }
```

#### Example Response

Currently no example available for a successful response.

### Add Fund

Each trusted party (company or user) must be associated with a fund, which can be used by various trusted parties on the Qredo Network. You need to first add a fund before performing withdraws or transfers.

When you add a fund, custody groups containing members are added to a fund. Custody group members are those that are nominated as custodians where their signatures are needed to allow the movement of money in the form of transfers and withdrawals. These include:

*   `custodygroup_withdraw` Custody group for a withdrawal
    
*   `custodygroup_tx` Custody group for a transfer
    

The members, e.g. Administrators and/or Principals, that are added to funds need to have been added as trusted parties. You specify the user IDs of the members.

There is also a threshold that determines how many custodian signatures are needed for an asset to be transferred or withdrawn.

There are assets associated with this example fund that include `BTC-TESTNET`.

The following includes the `custodygroup_withdraw` group with a `threshold` of 3 and 4 `members`. There is also the `custodygroup_tx` group with a `threshold` of 4 and 4 `members`. Note that custody groups cannot be modified.

#### Example Request


```
{  
 "name": "Fund 1", 
 "description": "Fund for demonstration purposes", 
 "theme": 2,   "custodygroup_withdraw": 
{     
 "threshold": 3, 
 "members": [       
    "1dnfLZolYD72zasqtmtTXXoaNNJ",  
    "1dnfLeHXkaxasdg4akvxglwKTKV",      
    "1dnfLsfgsaxQPs2v5kvxglwKTKV",          
    ]   
    },   
  "custodygroup_tx": {     
  "threshold": 4,     
  "members": [       
     "1dnfLZolYD72zasqtmtTXXoaNNJ",      
     "1dnfLeHXkaxasdg4akvxglwKTKV",  
     "1dnfLsfgsaxQPs2v5kvxglwKTKV",   
     "1dnfLeHXkaxQPs2v5kvxglwKTKV"     
     ]   
     },   
  "assets": ["BTC-TESTNET"]}
```

#### Example Response

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

In this example, we use `company_id` ()

#### Example Response

{ "total\_count": 0, "list": \[ { "asset": "BTC-TESTNET", "address": "n2GoFtw8aTH6yoMK9UW3fxrSp3iTL6jwUX", "balance": 0.001 } \] }

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
