{
    "Servers": {
        "1": {
            "Name": "InflationGameDB",
            "Group": "Servers",
            "Host": "db",
            "Port": 5432,
            "MaintenanceDB": "postgres",
            "Username": "postgres",
            "UseSSHTunnel": 0,
            "TunnelPort": "22",
            "TunnelAuthentication": 0,
            "KerberosAuthentication": false,
            "ConnectionParameters": {
                "sslmode": "prefer",
                "connect_timeout": 10,
                "sslcert": "<STORAGE_DIR>/.postgresql/postgresql.crt",
                "sslkey": "<STORAGE_DIR>/.postgresql/postgresql.key"
            }
        }
    }
}