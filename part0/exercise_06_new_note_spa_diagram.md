```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (data)
    activate server
    server->>server: push new data to notes
    server-->>browser: HTTPS 201 ({"message": note created"})
    deactivate server

    browser->>browser: redraws notes
```