<template>
  <div class="privacy-agreement-page">
    <div class="section first">
      <div class="content">
        <div class="title">Privacy Notice</div>
        <div class="desc">
          <h2>Effective Date: February 16, 2025</h2>
          <p class="sub-title">1. Introduction</p>
          <p>
            VIMORA LLC ("we," "our," or "us") is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit
            our website vimora.it (the "Site").
          </p>
          <p class="sub-title">2. Data Controller</p>
          <p>The Data Controller responsible for your personal data is VIMORA LLC at 2601 S Bayshore Dr, STE 715, Miami, FL 33133, USA.</p>
          <p class="sub-title">3. Personal Data We Collect</p>
          <p>We may collect and process the following types of personal data:</p>
          <p>Contact Information: Name, email address, postal address, phone number, and other similar information you provide when filling out forms on our Site.</p>
          <p>
            Navigation Data: IP addresses, browser type, operating system, referring URLs, access times, and pages viewed. This data is collected automatically to improve Site functionality and user
            experience.
          </p>
          <p>
            Cookies and Similar Technologies: The Site may use cookies to allow the technical functioning of the Site, to improve the use of the Site and to carry out statistical analysis of the use
            of the Site.
          </p>
          <p class="sub-title">4. Purpose of Data Processing</p>
          <p>We process your personal data for the following purposes:</p>
          <p>Providing Services: To fulfill your requests, process transactions, and provide customer support.</p>
          <p>Communication: To send administrative information, updates, and marketing communications, where permitted by law.</p>
          <p>Site Improvement: To analyze usage and enhance the functionality and user experience of our Site.</p>
          <p>Legal Compliance: To comply with legal obligations and protect our rights and interests.</p>

          <p class="sub-title">5. Legal Basis for Processing</p>
          <p>Our processing of your personal data is based on the following legal grounds:</p>
          <p>Consent: Where you have provided consent for specific processing activities.</p>
          <p>Contractual Necessity: To perform a contract with you or take steps at your request before entering into a contract.</p>
          <p>Legal Obligation: To comply with legal and regulatory requirements.</p>
          <p>Legitimate Interests: To pursue our legitimate interests, provided they do not override your rights and freedoms.</p>

          <p class="sub-title">6. Data Sharing and Disclosure</p>
          <p>We may share your personal data with:</p>
          <p>Service Providers: Third-party vendors who perform services on our behalf, such as payment processing, data analysis, and marketing assistance.</p>
          <p>Affiliates: Our subsidiaries and affiliates for purposes consistent with this Privacy Policy.</p>
          <p>Legal Authorities: When required by law or to protect our rights, property, or safety.</p>

          <p class="sub-title">7. International Data Transfers</p>
          <p>
            Your personal data may be transferred to and processed in countries outside your country of residence. We ensure that such transfers comply with applicable data protection laws and that
            appropriate safeguards are in place.
          </p>

          <p class="sub-title">8. Data Retention</p>
          <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

          <p class="sub-title">9. Your Rights</p>
          <p>You have the right to:</p>
          <p>Access your personal data and obtain a copy.</p>
          <p>Rectify inaccurate or incomplete data.</p>
          <p>Erase your personal data, under certain conditions.</p>
          <p>Restrict or object to the processing of your data.</p>
          <p>Withdraw consent at any time, where processing is based on consent, without affecting the lawfulness of prior processing</p>
          <p>Data portability, allowing you to receive your data in a structured, commonly used format.</p>
          <p>To exercise these rights, please contact us at info@vimora.it.</p>

          <p class="sub-title">10. Data Security</p>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

          <p class="sub-title">11. Changes to This Privacy Policy</p>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
        </div>
        <el-col :xs="24" :sm="24">
          <div class="submit-button" @click="handleBack">Back</div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { router } from "@/router";

const handleBack = () => {
  router.go(-1);
};
</script>

<style scoped lang="scss">
.privacy-agreement-page {
  --bgTextFS-SM: 32px;
  --bgTextFS-xs: 20px;

  --descFS-SM: 22px;
  --descFS-xs: 14px;

  width: 100%;
  position: relative;
  font-family: "TheSeasons";
  background-color: #faf9ef;
  color: #231f20;
  .section {
    width: 100%;
    .content {
      position: relative;
      height: 100%;

      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      @include responseTo("xs") {
        padding: 0 20px;
      }

      .title {
        padding-top: 160px;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 40px;
      }

      .desc {
        font-family: "IvyOra";
        font-weight: 300;
        line-height: 1.3;

        h2 {
          font-weight: 500;
          @include responseTo("xs") {
            margin-bottom: 20px;
          }
          @include responseTo("sm") {
            margin-bottom: 20px;
            font-size: 26px;
          }
        }
        .sub-title {
          font-weight: 500;
          @include responseTo("xs") {
            margin-bottom: 10px;
            font-size: 16px;
          }
          @include responseTo("sm") {
            margin-bottom: 20px;
            font-size: 18px;
          }
        }
        p {
          margin-bottom: 20px;
          @include responseTo("xs") {
            margin-bottom: 10px;
            font-size: 12px;
          }
          @include responseTo("sm") {
            margin-bottom: 10px;
            font-size: 16px;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .submit-button {
        width: 97px;
        height: 61px;
        background-image: url("@/assets/images/contact/submit-btn.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
        color: #ece8ca;
        font-size: 18px;
        line-height: 61px;
        cursor: pointer;
        font-family: "IvyOra";
        font-weight: 300;

        margin-top: 40px;

        @include responseTo("xs") {
          transform: scale(0.8);
          margin-top: 20px;
          transform-origin: top left;
        }
      }
    }
  }
}
</style>
