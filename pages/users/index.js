import React from "react";
import UserTable from "../../components/UserTable/UserTable";
import { NextSeo } from "next-seo";

const index = () => {
  const seoTitle = "User Management Table";
  const seoDescription =
    "User Management Table demonstrates your ability to fetch, display, and manage data from a public API with features like search, sorting, filtering, and pagination.";
  const ogImg =
    "https://res.cloudinary.com/mailmodo/image/upload/v1686633739/strapi/Prompt_Hunt_OG_6ee388d738.png";
  const canonicalURL = "/users/";
  return (
    <div>
      <NextSeo
        robotsProps={{
          maxImagePreview: "large",
        }}
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalURL}
        keywords={"user management"}
        openGraph={{
          url: canonicalURL,
          title: seoTitle,
          description: seoDescription,
          locale: "en_US",
          images: [{ url: ogImg }],
        }}
      />
      <UserTable />
    </div>
  );
};

export default index;
