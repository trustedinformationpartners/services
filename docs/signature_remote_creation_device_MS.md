# Remote Signature Creation Device Management Service in eIDAS

## Placement in the eIDAS Trust Services Schema

| **Main Trust Service**                   | **Subservices**                                                                 |
|------------------------------------------|----------------------------------------------------------------------------------|
| **Electronic Signatures**                | - Creation of signatures<br>- Validation of signatures<br>- Preservation of signatures<br>- Issuance of signature certificates<br>- **Management of remote signature creation devices** |<br>- Validation of certificates|

---

## Role and Importance of Remote Signature Creation Device Management Service

### 1. **Management of Remote Signature Creation Devices (QSCD)**
   - This service manages **Qualified Signature Creation Devices (QSCD)** used for creating electronic signatures remotely.
   - Ensures that these devices comply with eIDAS requirements, such as protection against unauthorized access and tampering.

### 2. **Support for Remote Signing**
   - Users do not need to own physical hardware (e.g., smartcards or USB tokens).
   - Instead, the signature is created remotely through a secure platform managed by a Qualified Trust Service Provider (QTSP).

### 3. **Compliance with eIDAS**
   - Guarantees that the remote signature creation process meets the legal and technical requirements under eIDAS.
   - Ensures that remote signatures are legally equivalent to handwritten signatures.

### 4. **Security and Access Control**
   - Manages authentication and authorization processes to ensure only authorized users have access to the remote signing functionality.
   - Protects sensitive cryptographic keys and signing processes from unauthorized use.

---
