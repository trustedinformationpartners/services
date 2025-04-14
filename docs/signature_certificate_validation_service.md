# Signature Certificate Validation Service 

## Placement in the eIDAS Trust Services Schema

| **Main Trust Service**                   | **Subservices**                                                                 |
|------------------------------------------|----------------------------------------------------------------------------------|
| **Electronic Signatures**                | - Creation of signatures<br>- **Validation of certificates**<br>- Validation of signatures<br>- Preservation of signatures<br>- Issuance of signature certificates<br>- Management of remote signature creation devices |

---

## Role and Importance of the Signature Certificate Validation Service

### 1. **Validation of Signature Certificates**
   - This service verifies the validity, authenticity, and status of certificates used for creating electronic signatures.
   - It ensures that the certificate is issued by a Qualified Trust Service Provider (QTSP) and complies with eIDAS requirements.
   - Checks include:
     - Whether the certificate was valid at the time of signing.
     - Whether the certificate has been revoked or expired.
     - Whether the certificate is classified as qualified or non-qualified.

### 2. **Legal Assurance**
   - The validation service provides evidence that the certificate meets eIDAS standards, ensuring that the associated signature is trustworthy and legally binding.
   - Qualified validation services issue certified reports that are admissible as legal evidence in court proceedings under eIDAS.

### 3. **Integration with Signature Validation**
   - The validation of a signature certificate is a foundational step in validating an electronic signature. Without a valid certificate, the signature itself cannot be trusted.
   - While **Signature Validation Services** focus on verifying the integrity and authenticity of the signature itself, **Certificate Validation Services** specifically address the trustworthiness of the certificate used to create the signature.

### 4. **Cross-Border Recognition**
   - Ensures interoperability across EU member states by validating certificates issued by QTSPs listed in the European Commission’s Trusted List.
   - Supports seamless digital transactions within the EU.

---

## Difference Between Certificate Validation and Signature Validation

| **Aspect**                   | **Certificate Validation Service**                                      | **Signature Validation Service**                                        |
|------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Focus**                    | Validates the status and authenticity of the certificate used for signing. | Validates the integrity and authenticity of the electronic signature itself. |
| **Checks Performed**         | Validity, revocation, expiration, and qualification status of certificates. | Integrity of signed data, cryptographic validity, and compliance with eIDAS standards. |
| **Output**                   | Confirms whether the certificate is valid and trusted.                   | Confirms whether the signature is valid and legally binding.            |
| **Dependency**               | Independent service but essential for validating signatures.             | Relies on a valid certificate for successful validation.                |

---

