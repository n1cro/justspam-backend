## Project setup

```bash
$ docker compose up --build -d
```

## Main commands

```bash
# Stop application
$ docker compose stop

# Restart application
$ docker compose restart

# Restart app and rebuild after any changes
$ docker compose up --build -d
```

## Utility commands

```bash
# Print system app logs
$ docker logs justspam-backend

# Print log file of IP processing
$ cat logs/report.log

# List all containers
$ docker ps -a
```
