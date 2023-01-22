# Deploy with App Engine

1. Google Could CLI

Install according to your environment

https://cloud.google.com/sdk/docs/install-sdk#linux

Show gcloud version

```
gcloud version
```

2. Login

```
gcloud auth login
```

login with your Google account

3. Set Project ID

```
gcloud config set project your-project-id
```

4. Deploy

use gcloud

```
gcloud app deploy
```

or npm script

```
npm run deploy
```

---

## Other Commands

```
gcloud app logs tail
```

```
gcloud auth init
```

```
gcloud auth revoke --all
```

```
gcloud config list
```

```
gcloud info
```

```
gcloud help
```

More: [gcloud Reference](https://cloud.google.com/sdk/gcloud/reference)