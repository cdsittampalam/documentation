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

Qredo’s Partner program is those who are committed to building a new era in capital markets for institutional-grade decentralized financial applications. We seek partners who think about the following criteria:

*   Composability - Are you developing other applications, centralized or decentralized, that can add additional value to joint customers?   
*   Integrity - Do you value the safety of your customer’s digital assets as if they were your own digital assets?    
*   Extensibility - Is your platform extensible, so that the value chain created by joint works can be extended by other DeFi applications?
    
If so, please get in touch.


Where to Go
-----------

You first need to register with the Partner API on the Qredo website. Once registered, you need to [Connect to the Partner API](#connect-to-the-partner-api) using an API key

To become familiar with how the API works, refer to various sections in the documentation and the [Swagger UI](https://partner-api.qredo.network/) to test the endpoints.

:::info
The Partner API is still work in progress. Qredo plan to add the following in future releases:

*   Client libraries    
*   Dedicated URLs for test, production and live environments
:::
    
You will need to use the Qredo Desktop app to help you for various functions, e.g., for finding users to add as trusted parties. For signing functions, you will need to use the Qredo Signing app.
    
Register for the Partner API
----------------------------

Signing up to the Partner API is available for a Qredo user from the Qredo Desktop app once they have registered. Once Qredo has granted your application to be a Partner API developer, the app allows you to generate your own API Key.

1. Ensure that are logged in to the app as a Qredo user.
2. Go to **Settings** > **Partner API**.  

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

### Add Keys to Headers

Once you have generated the API key, you add the API key to the HTTP headers to allow you to connect to URLs in the desired environments. The Partner API can be set up in on demo or server environments.
The Swagger UI allows you to choose an environment and add the API key, which populates the headers. For the server or Live environment, you need to generate, in addition to the API key, a public key that is signed by a private key. For the demo environment,
only the API key is needed.

#### Demo Environment

1. Access the Partner API at https://partner-api.qredo.network/.
2. Choose a URL.
   - Copy the following URL to the address bar: (https://demo-api.qredo.net/api/v1/p) or 
   - Select https://demo-api.qredo.net(BasePath) - **Demo Server** from the server list.
3. Click Authorise.
4. Paste the generated API key in the box.

The header format for requests in the demo environment must contain the API key. All request bodies should have content type 'application/json'.

The following is an example request header in cURL format:

```
curl -X GET "https://demo-api.qredo.net/api/v1/p/company/1f4s2r1NG4E1gZmoeXQBJo9MAww" -H "accept: application/json" -H "X-API-KEY: eyJrZXlfaWQiOiJBek13cFhDNFVoQWhwUSIsImtleSI6Im9GX0ZKUGthT25FdTd1VEU0czR1VDBrd3hqajgxUWJkRDhaOE9vXzhZdlUifQ"
```
#### Server Environment

A public key needs to be added to the Swagger UI. The public key enforces security by providing a signature in order to sign each request. 

The signature is used to sign areas where security needs to be applied including:

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contained added data.

1. Generate a public and private key pair on the command line using openssl. 
2. Extract the public key from the key pair using the command line.
3. Access the Partner API at https://partner-api.qredo.network/.
4. Choose a URL.
   - Copy the following URL to the address bar: (https://api.qredo.net/api/v1/p) or 
   - Select https://api.qredo.net(BasePath) - **API Server** from the server list.
5. Click Authorise.
4. Paste the generated API key in the box.
6. Add the public key.

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


### Parameters

Request parameters are sent in the request body and use application/json. However, GET method parameters are passed in a query string rather than the body of the URL.

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

You can create a company by adding basic information in a POST request. The POST request returns the reference (`ref`)and `company_id`. Each request is a POST allows you to create one company. To help you enter data quicker, some of the values are already prepopulated.

The country ID you enter must conform to the ISO 3166-1 country code.

You can repeat the process to create multiple companies. Other companies you create can be used as a trusted party in your trusted network.

In this example, a new company called John Doe Corp is entered in `name`. This is based in Brimingham, UK with the the `domain` of `johndoe.co.uk`.

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

Using the `company_id` for the company you created, you can add either a company or user as a trusted party. If the trusted party is of 'type' company, you have to specify the web address. If the trusted party is of 'type' user, you have to state the email address. In this example, you add IKatsuyoshi@gmail.com as the user, and acme.com as the company.

Users would have been added to the Qredo network through the Qredo Web App. When add a trusted party that is a user, you will receive an approval request on the Qredo Mobile app. Once approved, you will be able to find the trusted party on 

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


### Get Trusted Party

The Get Trusted Party endpoint lets you find out details of the trusted parties that exist in a company. Using the Get Trusted Party endpoint is also useful for finding out the "trusted_entity_id" of a trusted party user that you want to include as a member of a custody group when you create a fund.  

You will use the Get Trusted Party request, to obtain the trusted party user that you added in Add Trusted Party.

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

A fund also includes a threshold that determines how many custodian signatures are needed for an asset to be transferred or withdrawn. Each fund you create also includes one or more assets. 

In the example, the `custodygroup_withdraw` group with a `threshold` of 1 with 1 `member`. There is also the `custodygroup_tx` group with a `threshold` of 1 containing 1 `member`. This example fund contains `BTC-TESTNET`.

The fund is added to company id: "1f4sRjsZD612GdSvokktFReylZp".

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

The response shows an assigned 'fund_id' and IDs assigned for each custody group of 'custodygroup_withdraw' and 'custodygroup_tx'. 

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
