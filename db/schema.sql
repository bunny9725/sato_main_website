CREATE TABLE IF NOT EXISTS franchise_enquiries (
  id         serial PRIMARY KEY,
  name       text NOT NULL,
  phone      text NOT NULL,
  city       text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
