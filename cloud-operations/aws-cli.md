---
title: "Getting Started with AWS EC2"
layout: default
toc: true
---


---

### `aws-cli-setup.md`


# Setting Up AWS CLI

The AWS Command Line Interface (CLI) is a powerful tool that allows you to manage AWS services directly from your command line. This guide will walk you through the installation and configuration of the AWS CLI, along with some initial commands to verify your setup.

## Step 1: Install AWS CLI

### For Windows

1. Download the installer for Windows from the [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
2. Run the downloaded installer and follow the on-screen instructions.
3. After installation, open a new command prompt and verify the installation by running:
   ```bash
   aws --version
   ```

### For macOS

1. Open a terminal and use the `brew` command to install AWS CLI (if Homebrew is installed):
   ```bash
   brew install awscli
   ```
2. Verify the installation by running:
   ```bash
   aws --version
   ```

Alternatively, you can install it via the `curl` command:

1. Download and install:
   ```bash
   curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
   sudo installer -pkg AWSCLIV2.pkg -target /
   ```
2. Verify the installation:
   ```bash
   aws --version
   ```

### For Linux

1. Open a terminal and use the following commands to download, install, and verify the AWS CLI:

   ```bash
   curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
   unzip awscliv2.zip
   sudo ./aws/install
   ```

2. Verify the installation:
   ```bash
   aws --version
   ```

### Verifying the Installation

After installation, run the following command to check if AWS CLI is installed correctly. This should output the version of AWS CLI installed on your system:

```bash
aws --version
```

## Step 2: Configure AWS CLI

Once the AWS CLI is installed, configure it with your AWS credentials. You will need your **Access Key ID** and **Secret Access Key**, which you can generate in the AWS Management Console under **IAM**.

1. Run the following command:
   ```bash
   aws configure
   ```
2. Enter the required information:
   - **AWS Access Key ID**: Your access key ID.
   - **AWS Secret Access Key**: Your secret access key.
   - **Default region name**: The region you want to work in, e.g., `us-east-1`.
   - **Default output format**: The output format, such as `json`, `text`, or `table`.

Example:

```plaintext
AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
Default region name [None]: us-east-1
Default output format [None]: json
```

The configuration settings are stored in a file located at `~/.aws/credentials` (Linux & macOS) or `C:\Users\USERNAME\.aws\credentials` (Windows).

## Step 3: Verify the Configuration

To ensure the AWS CLI is set up correctly, you can run a few basic commands.

### List S3 Buckets

If you have any S3 buckets in your account, list them with the following command:

```bash
aws s3 ls
```

### Describe EC2 Instances

To check if you have any EC2 instances running in your configured region, use:

```bash
aws ec2 describe-instances
```

### Get Caller Identity

This command returns details about the IAM identity you are using with AWS CLI:

```bash
aws sts get-caller-identity
```

If the command runs successfully and returns information about your AWS account and IAM user, your AWS CLI is properly configured.

## Optional: Advanced Configuration

You can set additional configurations for the AWS CLI if needed:

- **Use Multiple Profiles**: If you work with multiple AWS accounts, create different profiles in your configuration file.
  
  Example:
  ```bash
  aws configure --profile profile_name
  ```

  To use a specific profile, add `--profile profile_name` to your commands:
  
  ```bash
  aws s3 ls --profile profile_name
  ```

- **Set Environment Variables**: You can configure AWS CLI settings using environment variables as well.

  ```bash
  export AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY_ID"
  export AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY"
  export AWS_DEFAULT_REGION="us-east-1"
  ```

## Uninstalling AWS CLI

If you need to uninstall the AWS CLI, follow these steps based on your operating system:

### On Windows

1. Open **Control Panel** > **Programs** > **Uninstall a program**.
2. Select **AWS Command Line Interface** and click **Uninstall**.

### On macOS

If you installed via Homebrew, use:

```bash
brew uninstall awscli
```

If installed manually:

```bash
sudo rm -rf /usr/local/aws-cli
```

### On Linux

If you installed AWS CLI with the downloaded package:

```bash
sudo rm -rf /usr/local/aws-cli
sudo rm /usr/local/bin/aws
```

## Conclusion

The AWS CLI provides a powerful interface for managing your AWS resources from the command line. After completing these steps, you should have a fully configured AWS CLI ready to use. Try out some basic commands to get started, and explore the AWS CLI documentation for more advanced features.

For more information, see the official [AWS CLI User Guide](https://docs.aws.amazon.com/cli/latest/userguide/).
```

---

### Explanation of Each Section

1. **Front Matter**:
   - Sets the title, layout, and table of contents (TOC) for the page. This helps Just the Docs format the page and generate a sidebar.

2. **Introduction**:
   - Provides a brief overview of the AWS CLI and its purpose.

3. **Step 1: Install AWS CLI**:
   - Instructions for installing the AWS CLI on Windows, macOS, and Linux. Each OS has specific steps.

4. **Step 2: Configure AWS CLI**:
   - Explains the `aws configure` command and the required inputs (Access Key ID, Secret Access Key, Region, and Output Format).

5. **Step 3: Verify the Configuration**:
   - Sample commands like `aws s3 ls` and `aws ec2 describe-instances` to test if the AWS CLI is set up correctly.

6. **Optional: Advanced Configuration**:
   - Provides additional options, such as configuring multiple profiles or setting environment variables.

7. **Uninstalling AWS CLI**:
   - Instructions for removing the AWS CLI on each operating system.

8. **Conclusion**:
   - Summarizes the AWS CLI setup process and directs users to the official AWS CLI documentation for further reading.

This Markdown file serves as a complete guide to setting up and configuring the AWS CLI, covering installation, configuration, and verification steps. Let me know if you need additional details or customization!
