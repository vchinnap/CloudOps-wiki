---
title: "Getting Started with AWS EC2"
layout: default
toc: true
---

# Getting Started with AWS EC2

Amazon Web Services (AWS) provides a powerful and flexible platform for building, deploying, and scaling applications. In this guide, we’ll walk through the process of setting up an EC2 instance, which is a virtual server in the cloud.

## What is AWS?

Amazon Web Services (AWS) is a secure cloud services platform that offers compute power, database storage, content delivery, and other functionalities. It allows businesses to scale up or down depending on their needs, paying only for the resources they use.

### Key Features of AWS

- **Scalability**: AWS allows businesses to scale their resources up or down based on demand.
- **Security**: AWS provides extensive security features, including IAM, VPCs, and encryption.
- **Cost-Effective**: With a pay-as-you-go pricing model, AWS reduces the need for large upfront investments.
- **Global Reach**: AWS operates data centers worldwide, allowing businesses to deploy applications closer to their users.

## Benefits of Amazon EC2

Amazon Elastic Compute Cloud (EC2) is one of the most popular services offered by AWS. Here are some of its benefits:

- **Scalability**: Quickly scale up or down based on demand.
- **Cost-Effective**: Pay only for the instances you use.
- **Flexible Configurations**: Choose from a wide variety of instance types optimized for different use cases.
- **Global Reach**: Deploy instances in data centers around the world.
- **Security**: Built-in security features like Virtual Private Clouds (VPCs), security groups, and IAM roles.

## Step-by-Step Guide to Setting Up an EC2 Instance

Follow these steps to create and configure an EC2 instance on AWS.

### Step 1: Log in to AWS Management Console

1. Go to [https://aws.amazon.com/](https://aws.amazon.com/) and click **Sign In to the Console**.
2. Enter your AWS account credentials.

### Step 2: Navigate to EC2

1. Once you’re logged in, navigate to the **EC2 Dashboard** by typing "EC2" in the search bar and selecting **EC2** under "Services."
2. On the EC2 Dashboard, click on **Launch Instance**.

### Step 3: Configure the Instance

1. **Choose an Amazon Machine Image (AMI)**: Select an Amazon-provided AMI or choose from available community and marketplace AMIs. For this guide, we'll use the **Amazon Linux 2 AMI**.
2. **Choose an Instance Type**: Select the instance type based on your needs. For a simple setup, choose **t2.micro** (eligible for the AWS Free Tier).
3. **Configure Instance Details**: Configure settings like the number of instances, network, and IAM role. Keep the default settings for a basic setup.
4. **Add Storage**: Define the storage requirements for your instance. The default storage is 8 GB for the Amazon Linux 2 AMI.
5. **Add Tags**: (Optional) Add tags to help organize your instances.
6. **Configure Security Group**: Create a new security group or select an existing one. Open ports as needed, such as port 22 for SSH access.

### Step 4: Review and Launch

1. Review all the instance details to ensure everything is correct.
2. Click **Launch**.
3. Select an existing key pair or create a new one to securely access your instance.
4. Acknowledge that you have access to the selected key pair, then click **Launch Instances**.

### Step 5: Connect to Your EC2 Instance

1. Once the instance is running, select it from the list and click **Connect**.
2. Choose the **EC2 Instance Connect** tab and click **Connect**. You will be connected to the instance’s terminal within the AWS Console.

Alternatively, you can use an SSH client to connect to your instance. Use the following command (replace `<key-pair-name>.pem` and `ec2-xx-xxx-xx-xx.compute-1.amazonaws.com` with your key and instance details):

```bash
ssh -i "<key-pair-name>.pem" ec2-user@ec2-xx-xxx-xx-xx.compute-1.amazonaws.com
