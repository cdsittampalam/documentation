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
* [Connect to the Partner API](#connect-to-the-partner-api) using an API key for use in the demo environment.
* Familiarise yourself with the API from these parts of the page: [API endpoints](#api-endpoints) and [quick-start guide](#quick-start-guide).
* Refer to the API using the [Swagger UI](https://partner-api.qredo.network/) to help you test and develop knowledge.
* [Set up the Live](#set-up-live) environment once ready to Go-Live.

Using the Qredo Apps
--------------------

The Partner API is used together with the Qredo Web app and the Qredo Mobile app for functions around Trusted Parties and custodians. Users that are Trusted Parties can be ordained as Custodians, or be counterparties to a trade initiator in a transfer. 

Users that are added as Trusted Parties need to have been registered on Qredo via the Qredo Web app. For more details on registration, refer to the [Getting Started](/docs/Getting%20Started) page.

The Partner API only permits custodian approvals from the Qredo Mobile app. When users are added as Trusted Parties through the Partner API, they need to accept the invite through the Qredo Mobile app. When ordained as custodians, they also need to approve transfer and withdrawal functions from the mobile app. This image shows how the phone app appears when custodians approve a withdrawal transaction.

![ledger](/doc-images/apprtransfer.png)

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

The Partner API key is a security feature which ensures that only you can access the Partner API endpoints. You generate an API key when connecting to the demo environment for testing. You also generate an API key in the server environment for going Live.

:::note

*   To ensure that you complete all testing before going Live, you must generate the API key for the demo environment first (and use the API in that environment).
*   You must make sure that API keys are not distributed to another party.
*   You must not add any of the API keys to parts of a program where it is not required, e.g., embedded directly in to the code of a program.
:::

### Generate an API Key

1. Click **Generate Key**. In the New Partner API Key screen, the Key ID and Partner API Key show.

![partnerapi](/doc-images/apikeypartner.png)

2. Click **Copy.**

:::note
If you have lost your API key, you can return to the Settings page to generate a new key.

1.  Click **Regenerate** Key.
2.  Click **Copy** in the New Partner API Key screen.
:::

### Add Key to Demo Environment

Once you have generated the API key, you add it to the demo environment area in the Swagger UI. The key is written to HTTP headers for connecting securely to the endpoints in the demo environment.

The following is an example request header in cURL format (obtainable from the Swagger UI):

```
curl -X GET "https://demo-api.qredo.net/api/v1/p/company/1f4s2r1NG4E1gZmoeXQBJo9MAww" -H "accept: application/json" -H "X-API-KEY: eyJrZXlfaWQiOiJBek13cFhDNFVoQWhwUSIsImtleSI6Im9GX0ZKUGthT25FdTd1VEU0czR1VDBrd3hqajgxUWJkRDhaOE9vXzhZdlUifQ"
```

1. Access the Partner API at https://partner-api.qredo.network/.
2. Choose the URL:
   - Copy this URL to the address bar: [https://demo-api.qredo.net/api/v1/p]. Or,
   - select [https://demo-api.qredo.net(BasePath)] - **Demo Server** from the server list.
3. Click **Authorise**.
4. Paste the generated API key in the box.

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

This quick-start guide shows you how to build your Qredo network programmatically using these endpoints based on the functions in the Swagger UI.

*   Create Company    
*   Add Trusted Party    
*   Add Fund    
*   Get deposit address    
*   Add funds to the deposit address


### Create Company

You can create a company by adding basic information in a POST request. The request returns the reference (`ref`) and `company_id`. Each request lets you create one company. To help you enter data quicker, some of the values are already prepopulated in the Swagger UI.

You repeat the process to create multiple companies as Trusted Parties, which form part of your Trusted Network on Qredo.

In this example, you create a company called John Doe Corp. This company is based in Birmingham, UK with the `domain` of johndoe.co.uk.

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

Using the `company_id` of ACME Corp, you add a user as a trusted party for that company, and state the email address. In this example, you add Izumi Katsuyoshi with the email address of IKatsuyoshi@gmail.com.

The response returned from the request indicates that the message is successful.

A trusted party that is a user must have been added to the Qredo Network through the Qredo Desktop app. When adding the trusted party using the below request, they receive an approval request on the Qredo Mobile app. Once approved, you will be able to find the trusted party when running a Returns All trusted parties for a company request.

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


You then enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for ACME Corp and the following request:

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

You enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for ACME Corp and the following request:

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

You enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for ACME Corp and the following request.


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

1. Enter **1fB50nbY9Tw2TT12K6VH46gDKWE** in Swagger for the `company_id` of ACME corp.

2. Enter **1dnfLZolYD72zasqtmtTXXoaNNJ** in Swagger for the `fund_id` of ACME corp.


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
* the payload (body) for POST/PUT requests that contain added data.

The following http headers are added to each request:

'x-sign:' the signature itself
'x-nonce:' the nonce used in the signature

The signature is in the base64 url safe encoding format (RFC 4648).

Once you have generated the API key, get in touch with Qredo who can assist you in adding the private key.
