--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: challenges; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.challenges (
    challenge_id integer NOT NULL,
    description text,
    difficulty_level character varying(50),
    reward character varying(255),
    start_date timestamp with time zone,
    end_date timestamp with time zone
);


ALTER TABLE public.challenges OWNER TO postgres;

--
-- Name: challenges_challenge_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.challenges_challenge_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.challenges_challenge_id_seq OWNER TO postgres;

--
-- Name: challenges_challenge_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.challenges_challenge_id_seq OWNED BY public.challenges.challenge_id;


--
-- Name: economic_calendar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.economic_calendar (
    id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    country character varying(3) NOT NULL,
    indicator text NOT NULL,
    actual numeric,
    previous numeric,
    consensus numeric,
    forecast numeric
);


ALTER TABLE public.economic_calendar OWNER TO postgres;

--
-- Name: economic_calendar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.economic_calendar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.economic_calendar_id_seq OWNER TO postgres;

--
-- Name: economic_calendar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.economic_calendar_id_seq OWNED BY public.economic_calendar.id;


--
-- Name: economic_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.economic_data (
    id integer NOT NULL,
    data_type character varying(255) NOT NULL,
    value numeric NOT NULL,
    date_updated timestamp without time zone NOT NULL,
    description text
);


ALTER TABLE public.economic_data OWNER TO postgres;

--
-- Name: economic_data_id_seq1; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.economic_data_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.economic_data_id_seq1 OWNER TO postgres;

--
-- Name: economic_data_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.economic_data_id_seq1 OWNED BY public.economic_data.id;


--
-- Name: economiccalendar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.economiccalendar (
    id integer NOT NULL,
    datetime timestamp with time zone NOT NULL,
    countrycode character varying(3) NOT NULL,
    eventname text NOT NULL,
    actualvalue numeric,
    previousvalue numeric,
    consensusvalue numeric,
    forecastvalue numeric,
    impactlevel integer,
    revisedflag boolean DEFAULT false
);


ALTER TABLE public.economiccalendar OWNER TO postgres;

--
-- Name: economiccalendar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.economiccalendar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.economiccalendar_id_seq OWNER TO postgres;

--
-- Name: economiccalendar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.economiccalendar_id_seq OWNED BY public.economiccalendar.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    event_id integer NOT NULL,
    event_type character varying(255) NOT NULL,
    aggregate_id integer NOT NULL,
    aggregate_type character varying(255) NOT NULL,
    event_data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.events OWNER TO postgres;

--
-- Name: events_event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_event_id_seq OWNER TO postgres;

--
-- Name: events_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_event_id_seq OWNED BY public.events.event_id;


--
-- Name: investments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.investments (
    investment_id integer NOT NULL,
    player_id integer NOT NULL,
    asset_type character varying(100) NOT NULL,
    amount_invested numeric(10,2) NOT NULL,
    current_value numeric(10,2),
    investment_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.investments OWNER TO postgres;

--
-- Name: investments_investment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.investments_investment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.investments_investment_id_seq OWNER TO postgres;

--
-- Name: investments_investment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.investments_investment_id_seq OWNED BY public.investments.investment_id;


--
-- Name: jobboard; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobboard (
    jobid integer NOT NULL,
    jobtitle character varying(255) NOT NULL,
    averagehourlypay numeric,
    averageweeklypay numeric,
    averageannualpay numeric,
    skilllevel character varying(50),
    experiencelevel character varying(50),
    averagehoursperweek numeric,
    totalpositions integer,
    filledpositions integer DEFAULT 0,
    vacantpositions integer
);


ALTER TABLE public.jobboard OWNER TO postgres;

--
-- Name: jobboard_jobid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobboard_jobid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jobboard_jobid_seq OWNER TO postgres;

--
-- Name: jobboard_jobid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobboard_jobid_seq OWNED BY public.jobboard.jobid;


--
-- Name: player_outgoings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player_outgoings (
    player_id integer NOT NULL,
    weekly_housing numeric(10,2) DEFAULT 50.00,
    monthly_housing numeric(10,2) DEFAULT 200.00,
    annual_housing numeric(10,2) DEFAULT 2400.00,
    weekly_transport numeric(10,2) DEFAULT 20.00,
    monthly_transport numeric(10,2) DEFAULT 80.00,
    annual_transport numeric(10,2) DEFAULT 960.00,
    weekly_food numeric(10,2) DEFAULT 40.00,
    monthly_food numeric(10,2) DEFAULT 160.00,
    annual_food numeric(10,2) DEFAULT 1920.00,
    weekly_utilities numeric(10,2) DEFAULT 20.00,
    monthly_utilities numeric(10,2) DEFAULT 80.00,
    annual_utilities numeric(10,2) DEFAULT 960.00,
    weekly_recreation numeric(10,2) DEFAULT 10.00,
    monthly_recreation numeric(10,2) DEFAULT 40.00,
    annual_recreation numeric(10,2) DEFAULT 480.00,
    weekly_restaurants numeric(10,2) DEFAULT 10.00,
    monthly_restaurants numeric(10,2) DEFAULT 40.00,
    annual_restaurants numeric(10,2) DEFAULT 480.00,
    weekly_household numeric(10,2) DEFAULT 10.00,
    monthly_household numeric(10,2) DEFAULT 40.00,
    annual_household numeric(10,2) DEFAULT 480.00,
    weekly_council_tax numeric(10,2) DEFAULT 10.00,
    monthly_council_tax numeric(10,2) DEFAULT 40.00,
    annual_council_tax numeric(10,2) DEFAULT 480.00,
    weekly_communications numeric(10,2) DEFAULT 10.00,
    monthly_communications numeric(10,2) DEFAULT 40.00,
    annual_communications numeric(10,2) DEFAULT 480.00,
    weekly_insurance numeric(10,2) DEFAULT 5.00,
    monthly_insurance numeric(10,2) DEFAULT 20.00,
    annual_insurance numeric(10,2) DEFAULT 240.00,
    weekly_other numeric(10,2) DEFAULT 10.00,
    monthly_other numeric(10,2) DEFAULT 40.00,
    annual_other numeric(10,2) DEFAULT 480.00,
    weekly_education numeric(10,2) DEFAULT 0.00,
    monthly_education numeric(10,2) DEFAULT 0.00,
    annual_education numeric(10,2) DEFAULT 0.00,
    weekly_licences_fines numeric(10,2) DEFAULT 0.00,
    monthly_licences_fines numeric(10,2) DEFAULT 0.00,
    annual_licences_fines numeric(10,2) DEFAULT 0.00,
    weekly_holiday_spending numeric(10,2) DEFAULT 0.00,
    monthly_holiday_spending numeric(10,2) DEFAULT 0.00,
    annual_holiday_spending numeric(10,2) DEFAULT 0.00
);


ALTER TABLE public.player_outgoings OWNER TO postgres;

--
-- Name: player_outgoings_player_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.player_outgoings_player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.player_outgoings_player_id_seq OWNER TO postgres;

--
-- Name: player_outgoings_player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.player_outgoings_player_id_seq OWNED BY public.player_outgoings.player_id;


--
-- Name: players; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.players (
    player_id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255),
    current_balance numeric(10,2),
    total_income numeric(10,2),
    total_savings numeric(10,2),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    last_login timestamp with time zone,
    password character varying(255) NOT NULL,
    skill character varying(50) DEFAULT 'Low'::character varying,
    experience character varying(50) DEFAULT 'Entry-Level'::character varying,
    employment_status character varying(50) DEFAULT 'Unemployed'::character varying,
    health integer DEFAULT 100
);


ALTER TABLE public.players OWNER TO postgres;

--
-- Name: players_player_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.players_player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.players_player_id_seq OWNER TO postgres;

--
-- Name: players_player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.players_player_id_seq OWNED BY public.players.player_id;


--
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    transaction_id integer NOT NULL,
    player_id integer NOT NULL,
    type character varying(50) NOT NULL,
    amount numeric(10,2) NOT NULL,
    description text,
    transaction_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- Name: transactions_transaction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transactions_transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transactions_transaction_id_seq OWNER TO postgres;

--
-- Name: transactions_transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transactions_transaction_id_seq OWNED BY public.transactions.transaction_id;


--
-- Name: challenges challenge_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.challenges ALTER COLUMN challenge_id SET DEFAULT nextval('public.challenges_challenge_id_seq'::regclass);


--
-- Name: economic_calendar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.economic_calendar ALTER COLUMN id SET DEFAULT nextval('public.economic_calendar_id_seq'::regclass);


--
-- Name: economic_data id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.economic_data ALTER COLUMN id SET DEFAULT nextval('public.economic_data_id_seq1'::regclass);


--
-- Name: economiccalendar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.economiccalendar ALTER COLUMN id SET DEFAULT nextval('public.economiccalendar_id_seq'::regclass);


--
-- Name: events event_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ALTER COLUMN event_id SET DEFAULT nextval('public.events_event_id_seq'::regclass);


--
-- Name: investments investment_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investments ALTER COLUMN investment_id SET DEFAULT nextval('public.investments_investment_id_seq'::regclass);


--
-- Name: jobboard jobid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobboard ALTER COLUMN jobid SET DEFAULT nextval('public.jobboard_jobid_seq'::regclass);


--
-- Name: player_outgoings player_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_outgoings ALTER COLUMN player_id SET DEFAULT nextval('public.player_outgoings_player_id_seq'::regclass);


--
-- Name: players player_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players ALTER COLUMN player_id SET DEFAULT nextval('public.players_player_id_seq'::regclass);


--
-- Name: transactions transaction_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions ALTER COLUMN transaction_id SET DEFAULT nextval('public.transactions_transaction_id_seq'::regclass);


--
-- Data for Name: challenges; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.challenges (challenge_id, description, difficulty_level, reward, start_date, end_date) FROM stdin;
\.


--
-- Data for Name: economic_calendar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.economic_calendar (id, date, "time", country, indicator, actual, previous, consensus, forecast) FROM stdin;
1	2024-01-02	09:30:00	GB	S&P Global Manufacturing PMI Final DEC	46.2	47.2	46.4	46.4
2	2024-01-04	09:30:00	GB	BoE Consumer Credit NOV	2005	1411	1400	1500
3	2024-01-04	09:30:00	GB	Mortgage Approvals NOV	50067	47888	48500	48000
4	2024-01-04	09:30:00	GB	Mortgage Lending NOV	-39	-83	\N	-200
5	2024-01-04	09:30:00	GB	S&P Global Services PMI Final DEC	53.4	50.9	52.7	52.7
6	2024-01-04	09:30:00	GB	M4 Money Supply MoM NOV	-0.1	0.3	\N	0.1
7	2024-01-04	09:30:00	GB	Net Lending to Individuals MoM NOV	1970	1300	\N	1000
8	2024-01-04	09:30:00	GB	S&P Global Composite PMI Final DEC	52.1	50.7	51.7	51.7
9	2024-01-04	10:00:00	GB	15-Year Treasury Gilt Auction	4.067	4.871	\N	\N
10	2024-01-05	07:00:00	GB	Halifax House Price Index MoM DEC	1.1	0.6	\N	0.1
11	2024-01-05	07:00:00	GB	Halifax House Price Index YoY DEC	1.7	-0.8	\N	-0.4
12	2024-01-05	09:00:00	GB	New Car Sales YoY DEC	9.8	9.5	\N	11.1
13	2024-01-05	09:30:00	GB	S&P Global Construction PMI DEC	46.8	45.5	46	46.2
14	2024-02-06	12:01:00	GB	BRC Retail Sales Monitor YoY JAN	\N	\N	\N	\N
15	2024-02-06	09:30:00	GB	S&P Global Construction PMI JAN	\N	46.8	\N	48.2
16	2024-02-06	10:00:00	GB	30-Year Green Gilt Auction	\N	\N	\N	\N
17	2024-02-07	07:00:00	GB	Halifax House Price Index MoM JAN	\N	1.1	\N	\N
18	2024-02-07	07:00:00	GB	Halifax House Price Index YoY JAN	\N	1.7	\N	\N
19	2024-02-07	10:00:00	GB	3-Year Treasury Gilt Auction	\N	\N	\N	\N
20	2024-02-07	10:00:00	GB	BBA Mortgage Rate JAN	\N	7.96	\N	7.91
21	2024-02-08	12:01:00	GB	RICS House Price Balance JAN	\N	\N	\N	-39.0
22	2024-02-13	07:00:00	GB	Unemployment Rate DEC	\N	\N	\N	\N
23	2024-02-13	07:00:00	GB	Average Earnings incl. Bonus (3Mo/Yr) DEC	\N	\N	\N	7.0
24	2024-02-13	07:00:00	GB	Employment Change NOV	\N	\N	\N	\N
25	2024-02-13	07:00:00	GB	Average Earnings excl. Bonus (3Mo/Yr) DEC	\N	\N	\N	6.9
26	2024-02-13	07:00:00	GB	Claimant Count Change JAN	\N	\N	\N	\N
27	2024-02-13	07:00:00	GB	HMRC Payrolls Change JAN	\N	\N	\N	\N
28	2024-02-13	10:00:00	GB	10-Year Index-Linked Treasury Gilt Auction	\N	\N	\N	\N
29	2024-01-08	10:00:00	GB	BBA Mortgage Rate DEC	0.0796	0.0803	\N	0.08
30	2024-01-09	00:01:00	GB	BRC Retail Sales Monitor YoY DEC	0.019	0.026	\N	0.021
31	2024-01-09	10:00:00	GB	20-Year Treasury Gilt Auction	4.391	\N	\N	\N
32	2024-01-10	10:00:00	GB	3-Year Treasury Gilt Auction	3.887	3.958	\N	\N
33	2024-01-12	07:00:00	GB	GDP MoM NOV	0.003	-0.003	0.002	0.001
34	2024-01-12	07:00:00	GB	GDP 3-Month Avg NOV	-0.002	-0.002	-0.001	-0.001
35	2024-01-12	07:00:00	GB	Goods Trade Balance NOV	-14189	-15936	-15700	-16500
36	2024-01-12	07:00:00	GB	Goods Trade Balance Non-EU NOV	-2838	-3919	\N	-4200
37	2024-01-12	07:00:00	GB	Industrial Production MoM NOV	0.003	-0.013	0.003	0.002
38	2024-01-12	07:00:00	GB	Manufacturing Production MoM NOV	0.004	-0.012	0.003	0.003
39	2024-01-12	07:00:00	GB	Balance of Trade NOV	-1408	-3198	\N	-4000
40	2024-01-12	07:00:00	GB	Construction Output YoY NOV	0.009	0.013	0.013	0.009
41	2024-01-12	07:00:00	GB	GDP YoY NOV	0.002	-0.001	0.002	0.002
42	2024-01-12	07:00:00	GB	Industrial Production YoY NOV	-0.001	-0.005	0.007	0.005
43	2024-01-12	07:00:00	GB	Manufacturing Production YoY NOV	0.013	0.002	0.017	0.015
44	2024-01-12	13:00:00	GB	NIESR Monthly GDP Tracker DEC	0	-0.002	\N	0
45	2024-01-16	07:00:00	GB	Unemployment Rate NOV	\N	0.042	0.043	0.043
46	2024-01-16	07:00:00	GB	Average Earnings incl. Bonus (3Mo/Yr) NOV	\N	0.072	0.068	0.07
47	2024-01-16	07:00:00	GB	Employment Change OCT	\N	50000	\N	80000
48	2024-01-16	07:00:00	GB	Average Earnings excl. Bonus (3Mo/Yr) NOV	\N	0.073	0.066	0.068
49	2024-01-16	07:00:00	GB	Claimant Count Change DEC	\N	16000	\N	3000
50	2024-01-16	07:00:00	GB	HMRC Payrolls Change DEC	\N	-12000	\N	30000
51	2024-01-16	10:00:00	GB	10-Year Index-Linked Treasury Gilt Auction	\N	0.724	\N	\N
52	2024-01-17	07:00:00	GB	Inflation Rate YoY DEC	\N	0.039	0.038	0.037
53	2024-01-17	07:00:00	GB	Core Inflation Rate YoY DEC	\N	0.051	0.049	0.048
54	2024-01-17	07:00:00	GB	Inflation Rate MoM DEC	\N	-0.002	0.002	0.001
55	2024-01-17	07:00:00	GB	Core Inflation Rate MoM DEC	\N	-0.003	\N	0.003
56	2024-01-17	07:00:00	GB	PPI Core Output MoM DEC	\N	0	\N	-0.001
57	2024-01-17	07:00:00	GB	PPI Core Output YoY DEC	\N	0.002	\N	0.001
58	2024-01-17	07:00:00	GB	PPI Input MoM DEC	\N	-0.003	\N	-0.001
59	2024-01-17	07:00:00	GB	PPI Input YoY DEC	\N	-0.026	\N	-0.03
60	2024-01-17	07:00:00	GB	PPI Output MoM DEC	\N	-0.001	\N	-0.002
61	2024-01-17	07:00:00	GB	PPI Output YoY DEC	\N	-0.002	\N	0.004
62	2024-01-17	07:00:00	GB	Retail Price Index MoM DEC	\N	-0.001	0.004	0.003
63	2024-01-17	07:00:00	GB	Retail Price Index YoY DEC	\N	0.053	0.05	0.05
64	2024-01-17	10:00:00	GB	10-Year Treasury Gilt Auction	\N	3.739	\N	\N
65	2024-01-18	00:01:00	GB	RICS House Price Balance DEC	\N	-0.43	\N	-0.41
66	2024-01-19	07:00:00	GB	Retail Sales MoM DEC	\N	0.013	-0.005	-0.003
67	2024-01-19	07:00:00	GB	Retail Sales ex Fuel MoM DEC	\N	0.013	-0.006	-0.003
68	2024-01-19	07:00:00	GB	Retail Sales YoY DEC	\N	0.001	0.011	0.015
69	2024-01-19	07:00:00	GB	Retail Sales ex Fuel YoY DEC	\N	0.003	0.013	0.016
70	2024-01-23	07:00:00	GB	Public Sector Net Borrowing DEC	\N	-13400	\N	-14700
71	2024-01-23	07:00:00	GB	Public Sector Net Borrowing Ex Banks DEC	\N	-14330	\N	-22400
72	2024-01-24	09:30:00	GB	S&P Global Composite PMI Flash JAN	\N	52.1	\N	\N
73	2024-01-24	09:30:00	GB	S&P Global Manufacturing PMI Flash JAN	\N	46.2	\N	47
74	2024-01-24	09:30:00	GB	S&P Global Services PMI Flash JAN	\N	53.4	\N	\N
75	2024-01-24	10:00:00	GB	5-Year Treasury Gilt Auction	\N	4.041	\N	\N
76	2024-01-24	11:00:00	GB	CBI Business Optimism Index Q1	\N	-15	\N	2
77	2024-01-24	11:00:00	GB	CBI Industrial Trends Orders JAN	\N	-23	\N	-16
78	2024-01-25	00:01:00	GB	Car Production YoY DEC	\N	\N	\N	\N
79	2024-01-26	00:01:00	GB	Gfk Consumer Confidence JAN	\N	-22	\N	-18
80	2024-01-26	11:00:00	GB	CBI Distributive Trades JAN	\N	\N	\N	\N
81	2024-01-30	09:30:00	GB	BoE Consumer Credit DEC	\N	2.005	\N	0.85
82	2024-01-30	09:30:00	GB	Mortgage Approvals DEC	\N	50.067	\N	51.5
83	2024-01-30	09:30:00	GB	Mortgage Lending DEC	\N	-0.039	\N	0.2
84	2024-01-30	09:30:00	GB	M4 Money Supply MoM DEC	\N	-0.001	\N	\N
85	2024-01-30	09:30:00	GB	Net Lending to Individuals MoM DEC	\N	1.97	\N	\N
86	2024-01-30	10:00:00	GB	28-Year Index-Linked Treasury Gilt Auction	\N	1.314	\N	\N
\.


--
-- Data for Name: economic_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.economic_data (id, data_type, value, date_updated, description) FROM stdin;
1	Employment Rate	75.7	2023-08-01 00:00:00	Aged 16 to 64 seasonally adjusted (Aug - Oct 2023)
2	Unemployment Rate	4.2	2023-08-01 00:00:00	Aged 16+ seasonally adjusted (Aug - Oct 2023)
3	Inflation Rate	4.2	2023-11-01 00:00:00	CPIH 12-month rate (Nov 2023)
4	GDP	-0.1	2023-07-01 00:00:00	Quarter on Quarter (Jul - Sep 2023)
5	UK Population	67026300	2021-07-01 00:00:00	Mid-year estimate (2021)
\.


--
-- Data for Name: economiccalendar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.economiccalendar (id, datetime, countrycode, eventname, actualvalue, previousvalue, consensusvalue, forecastvalue, impactlevel, revisedflag) FROM stdin;
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events (event_id, event_type, aggregate_id, aggregate_type, event_data, created_at) FROM stdin;
1	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:24:20.501477+00
2	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:24:30.144521+00
3	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:38:03.544513+00
4	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:38:36.705086+00
5	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:45:09.956393+00
6	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:54:37.9817+00
7	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:55:03.865096+00
8	UserLoggedIn	2	player	{"username": "steve"}	2024-01-14 23:56:02.600942+00
10	UserRegistered	15	player	{"email": "dasdasd22@gsg.com", "username": "steve11111111", "hashedPassword": "$2b$10$LPI5lf/OpYm6dbQf2xFWeO2oDSTv2d8h3ON/sysJB7kfNUNSBdk86"}	2024-01-15 01:33:59.631547+00
11	UserLoggedIn	15	player	{"username": "steve11111111"}	2024-01-15 01:37:29.898668+00
12	UserLoggedIn	2	player	{"username": "steve"}	2024-01-15 01:45:22.515859+00
13	UserLoggedIn	2	player	{"username": "steve"}	2024-01-15 01:45:59.07677+00
14	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 00:46:43.484665+00
15	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 03:56:20.736954+00
16	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 03:57:15.541321+00
17	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 04:02:01.851371+00
18	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 11:12:07.320268+00
19	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 11:16:55.056537+00
20	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 11:25:01.971251+00
21	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 11:30:22.565351+00
22	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 11:36:10.905152+00
23	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 12:01:37.762357+00
24	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 12:02:12.861081+00
25	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 12:22:32.770116+00
26	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 12:28:41.497361+00
27	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 12:34:40.792847+00
28	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 12:45:39.415058+00
29	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 12:53:44.964669+00
30	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 13:14:01.423243+00
31	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 13:37:32.461162+00
32	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 13:37:50.619025+00
33	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 13:43:58.941619+00
34	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 13:44:41.969981+00
35	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 13:51:39.610432+00
36	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 13:57:04.51046+00
37	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 14:04:06.771149+00
38	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 14:13:04.610891+00
40	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 14:24:36.357629+00
41	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 14:35:58.903834+00
42	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 14:37:41.383967+00
43	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 14:58:56.164225+00
44	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 14:59:37.54168+00
45	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 15:09:50.76228+00
46	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 21:40:51.292957+00
48	UserLoggedIn	2	player	{"username": "steve"}	2024-01-17 21:46:09.25032+00
49	UserRegistered	16	player	{"email": "smcsorl@googlemail.com", "username": "smcsorl", "hashedPassword": "$2b$10$Zn.i4uDYsNAvFA/CuNsbV.V/fYxttLh9RdEJAK9ZnL8Z01IYQ6432"}	2024-01-17 21:57:46.489336+00
50	UserLoggedIn	16	player	{"username": "smcsorl"}	2024-01-17 21:58:08.102891+00
51	UserRegistered	19	player	{"email": "steve8@sky.com", "username": "steve8", "hashedPassword": "$2b$10$IjkjM17jqcRGl9Jdcy4qOelBAASDma4p1b.4Ru2ICb0FyL8RfGPSy"}	2024-01-17 22:53:01.219387+00
52	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-17 22:53:16.464818+00
53	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-18 02:21:39.673824+00
54	UserLoggedIn	16	player	{"username": "smcsorl"}	2024-01-18 02:25:02.043289+00
55	UserLoggedIn	16	player	{"username": "smcsorl"}	2024-01-18 03:43:04.363931+00
56	UserLoggedIn	16	player	{"username": "smcsorl"}	2024-01-19 01:47:07.534722+00
57	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-19 01:58:04.836038+00
58	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-19 03:01:43.073375+00
59	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-19 03:18:11.643448+00
60	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-19 17:19:58.957962+00
61	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-19 18:37:57.015971+00
62	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-20 00:11:25.001371+00
63	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-20 00:22:45.674425+00
64	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-20 00:50:08.722807+00
65	UserLoggedIn	19	player	{"username": "steve8"}	2024-01-20 00:54:55.187899+00
\.


--
-- Data for Name: investments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investments (investment_id, player_id, asset_type, amount_invested, current_value, investment_date) FROM stdin;
\.


--
-- Data for Name: jobboard; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobboard (jobid, jobtitle, averagehourlypay, averageweeklypay, averageannualpay, skilllevel, experiencelevel, averagehoursperweek, totalpositions, filledpositions, vacantpositions) FROM stdin;
13	Senior police officers	33	1310	68120	High	Senior-Level	\N	\N	0	\N
15	Functional managers and directors n.e.c.	34	1280	66560	High	Senior-Level	40	55	50	5
16	Senior professionals of educational establishments	40	1210	62920	High	Senior-Level	30	70	60	10
17	Higher education teaching professionals	35	1210	62920	High	Mid-Level	35	45	40	5
18	IT project and programme managers	32	1190	61880	High	Mid-Level	37	40	30	10
19	Train and tram drivers	31	1190	61880	Medium	Mid-Level	36	80	70	10
20	Production managers and directors in manufacturing	32	1180	61360	High	Mid-Level	30	90	80	10
21	Ship and hovercraft officers	30	1180	61360	Medium	Mid-Level	\N	\N	0	\N
22	Production managers and directors in mining and energy	29	1120	58240	High	Mid-Level	\N	\N	0	\N
23	Business and financial project management professionals	32	1120	58240	High	Mid-Level	33	60	40	20
24	Actors, entertainers and presenters	26	1120	58240	Medium	Varies	39	55	50	5
25	Purchasing managers and directors	32	1110	57720	High	Mid-Level	32	70	65	5
26	Solicitors	37	1100	57200	High	Mid-Level	34	90	85	5
27	IT business analysts, architects and systems designers	30	1100	57200	High	Mid-Level	0	0	0	0
28	Health services and public health managers and directors	28	1100	57200	High	Senior-Level	0	0	0	0
29	Actuaries, economists and statisticians	31	1100	57200	High	Mid-Level	0	0	0	0
30	Human resource managers and directors	30	1100	57200	High	Mid-Level	35	50	45	5
31	Senior officers in fire, ambulance, prison and related services	27	1090	56680	High	Senior-Level	32	75	70	5
32	IT specialist managers	29	1070	55640	High	Mid-Level	\N	\N	0	\N
33	Dental practitioners	45	1040	54080	High	Senior-Level	\N	\N	0	\N
34	Sales accounts and business development managers	27	1040	54080	Medium	Mid-Level	\N	\N	0	\N
35	Research and development managers	28	1040	54080	High	Mid-Level	\N	\N	0	\N
36	Taxation experts	31	1020	53040	High	Mid-Level	\N	\N	0	\N
37	Electrical engineers	26	1000	52000	High	Mid-Level	\N	\N	0	\N
38	Financial and accounting technicians	27	990	51480	Medium	Mid-Level	\N	\N	0	\N
39	Ophthalmic opticians	38	990	51480	High	Mid-Level	\N	\N	0	\N
40	Barristers and judges	35	990	51480	High	Senior-Level	\N	\N	0	\N
41	Production managers and directors in construction	24	990	51480	High	Mid-Level	\N	\N	0	\N
42	Rail transport operatives	23	990	51480	Medium	Entry-Level	\N	\N	0	\N
43	Arts officers, producers and directors	26	970	50440	Medium	Mid-Level	\N	\N	0	\N
44	Electronics engineers	24	970	50440	High	Mid-Level	\N	\N	0	\N
45	Programmers and software development professionals	27	970	50440	High	Mid-Level	\N	\N	0	\N
46	Rail and rolling stock builders and repairers	21	960	49920	Medium	Mid-Level	\N	\N	0	\N
47	Business, research and administrative professionals n.e.c.	28	960	49920	High	Mid-Level	\N	\N	0	\N
48	Management consultants and business analysts	28	940	48880	High	Mid-Level	\N	\N	0	\N
49	Architects	30	940	48880	High	Mid-Level	\N	\N	0	\N
50	Information technology and telecommunications professionals n.e.c.	26	930	48360	High	Mid-Level	\N	\N	0	\N
58	Protective service associate professionals n.e.c.	26	900	46800	Medium	Mid-Level	\N	\N	0	\N
59	Civil engineers	24	900	46800	High	Mid-Level	\N	\N	0	\N
60	Financial accounts managers	24	890	46280	High	Mid-Level	\N	\N	0	\N
61	Engineering professionals n.e.c.	23	890	46280	High	Mid-Level	\N	\N	0	\N
62	Elected officers and representatives	18	890	46280	Medium	Senior-Level	\N	\N	0	\N
63	Design and development engineers	24	880	45760	High	Mid-Level	\N	\N	0	\N
64	Pharmacists	29	870	45240	High	Mid-Level	\N	\N	0	\N
65	Shopkeepers and proprietors – wholesale and retail	12	870	45240	Low	Mid-Level	\N	\N	0	\N
66	Managers and directors in transport and distribution	23	860	44720	High	Mid-Level	\N	\N	0	\N
67	Production and process engineers	23	860	44720	High	Mid-Level	\N	\N	0	\N
68	Property, housing and estate managers	18	860	44720	Medium	Mid-Level	\N	\N	0	\N
69	Secondary education teaching professionals	28	860	44720	High	Mid-Level	\N	\N	0	\N
70	Medical radiographers	23	850	44200	High	Mid-Level	\N	\N	0	\N
71	Social services managers and directors	22	850	44200	High	Mid-Level	\N	\N	0	\N
72	Insurance underwriters	24	850	44200	High	Mid-Level	\N	\N	0	\N
73	Psychologists	27	850	44200	High	Mid-Level	\N	\N	0	\N
74	Natural and social science professionals n.e.c.	20	840	43680	High	Mid-Level	\N	\N	0	\N
75	Education advisers and school inspectors	28	830	43160	High	Mid-Level	\N	\N	0	\N
76	Town planning officers	23	830	43160	High	Mid-Level	\N	\N	0	\N
77	Aircraft maintenance and related trades	16	810	42120	Medium	Mid-Level	\N	\N	0	\N
78	Crane drivers	14	810	42120	Medium	Entry-Level	\N	\N	0	\N
79	Biological scientists and biochemists	22	810	42120	High	Mid-Level	\N	\N	0	\N
80	Further education teaching professionals	26	810	42120	High	Mid-Level	\N	\N	0	\N
81	Musicians	37	810	42120	High	Varied	\N	\N	0	\N
82	Residential, day and domiciliary care managers and proprietors	17	800	41600	High	Mid-Level	\N	\N	0	\N
83	Skilled metal, electrical and electronic trades supervisors	17	800	41600	High	Mid-Level	\N	\N	0	\N
84	Inspectors of standards and regulations	22	800	41600	High	Mid-Level	\N	\N	0	\N
85	Energy plant operatives	16	790	41080	Medium	Entry-Level	\N	\N	0	\N
86	Health care practice managers	14	790	41080	High	Mid-Level	\N	\N	0	\N
87	Business and related research professionals	23	790	41080	High	Mid-Level	\N	\N	0	\N
88	Primary and nursery education teaching professionals	28	780	40560	High	Mid-Level	\N	\N	0	\N
89	Health professionals n.e.c.	25	780	40560	High	Mid-Level	\N	\N	0	\N
90	Telecommunications engineers	18	780	40560	Medium	Mid-Level	\N	\N	0	\N
91	Chemical scientists	20	780	40560	High	Mid-Level	\N	\N	0	\N
92	Nurses	22	780	40560	High	Entry-Level	\N	\N	0	\N
93	Environment professionals	21	780	40560	High	Mid-Level	\N	\N	0	\N
94	Electrical and electronics technicians	21	770	40040	High	Mid-Level	\N	\N	0	\N
95	Managers and proprietors in other services n.e.c.	15	770	40040	Medium	Mid-Level	\N	\N	0	\N
96	Midwives	22	770	40040	High	Mid-Level	\N	\N	0	\N
97	Engineering technicians	22	760	39520	High	Mid-Level	\N	\N	0	\N
98	Construction and building trades supervisors	17	760	39520	Medium	Mid-Level	\N	\N	0	\N
99	Fire service officers (watch manager and below)	18	760	39520	High	Mid-Level	\N	\N	0	\N
100	Estimators, valuers and assessors	21	760	39520	Medium	Mid-Level	\N	\N	0	\N
201	Communication operators	17	590	30680	Medium	Entry-Level	37.5	65	45	20
202	National government administrative occupations	15	590	30680	Low	Entry-Level	38.0	55	40	15
203	Construction and building trades n.e.c.	13	590	30680	Low	Entry-Level	39.2	70	55	15
204	Housing officers	18	590	30680	Medium	Mid-Level	40.5	75	60	15
205	Science, engineering and production technicians n.e.c.	17	590	30680	Medium	Mid-Level	38.8	60	50	10
206	Rubber process operatives	11	590	30680	Low	Entry-Level	\N	\N	0	\N
207	Conference and exhibition managers and organisers	16	590	30680	Medium	Mid-Level	\N	\N	0	\N
208	Hotel and accommodation managers and proprietors	9	590	30680	Medium	Mid-Level	\N	\N	0	\N
209	Boat and ship builders and repairers	10	580	30160	Medium	Mid-Level	\N	\N	0	\N
210	Counsellors	18	580	30160	High	Mid-Level	\N	\N	0	\N
211	Teaching and other educational professionals n.e.c.	29	580	30160	High	Mid-Level	\N	\N	0	\N
212	Driving instructors	41	580	30160	Medium	Mid-Level	\N	\N	0	\N
213	Office supervisors	15	580	30160	Medium	Mid-Level	\N	\N	0	\N
214	Welding trades	12	580	30160	Medium	Entry-Level	\N	\N	0	\N
215	Publicans and managers of licensed premises	10	580	30160	Low	Mid-Level	\N	\N	0	\N
216	Local government administrative occupations	15	570	29640	Low	Entry-Level	\N	\N	0	\N
217	Fork-lift truck drivers	14	570	29640	Low	Entry-Level	\N	\N	0	\N
218	Undertakers, mortuary and crematorium assistants	18	570	29640	Low	Entry-Level	\N	\N	0	\N
219	Steel erectors	11	570	29640	Medium	Entry-Level	\N	\N	0	\N
220	Precision instrument makers and repairers	12	570	29640	Medium	Mid-Level	\N	\N	0	\N
221	Vehicle technicians, mechanics and electricians	12	570	29640	Medium	Mid-Level	\N	\N	0	\N
222	Ambulance staff (excluding paramedics)	16	560	29120	Medium	Mid-Level	\N	\N	0	\N
223	Transport and distribution clerks and assistants	14	560	29120	Low	Entry-Level	\N	\N	0	\N
224	Assemblers (vehicles and metal goods)	13	560	29120	Low	Entry-Level	\N	\N	0	\N
225	Other drivers and transport operatives n.e.c.	13	560	29120	Low	Entry-Level	\N	\N	0	\N
226	Farmers	12	560	29120	Medium	Mid-Level	\N	\N	0	\N
227	Youth and community workers	17	550	28600	Medium	Mid-Level	\N	\N	0	\N
228	Security guards and related occupations	13	550	28600	Low	Entry-Level	\N	\N	0	\N
229	Houseparents and residential wardens	18	550	28600	Medium	Mid-Level	\N	\N	0	\N
230	Moulders, core makers and die casters	12	550	28600	Low	Entry-Level	\N	\N	0	\N
231	Other administrative occupations n.e.c.	15	550	28600	Low	Entry-Level	\N	\N	0	\N
232	Other skilled trades n.e.c.	15	550	28600	Medium	Mid-Level	\N	\N	0	\N
233	Electroplaters	11	550	28600	Low	Entry-Level	\N	\N	0	\N
234	Child and early years officers	16	540	28080	Medium	Mid-Level	\N	\N	0	\N
235	Bus and coach drivers	13	540	28080	Low	Entry-Level	\N	\N	0	\N
236	Smiths and forge workers	20	540	28080	Medium	Mid-Level	\N	\N	0	\N
237	Welfare and housing associate professionals n.e.e.c.	16	540	28080	Medium	Mid-Level	\N	\N	0	\N
238	Sheet metal workers	11	540	28080	Low	Entry-Level	\N	\N	0	\N
239	Legal secretaries	14	540	28080	Low	Mid-Level	\N	\N	0	\N
240	Air transport operatives	12	540	28080	Low	Entry-Level	\N	\N	0	\N
241	Pharmaceutical technicians	16	540	28080	Medium	Mid-Level	\N	\N	0	\N
242	Construction operatives n.e.c.	11	540	28080	Low	Entry-Level	\N	\N	0	\N
243	Vehicle paint technicians	11	530	27560	Low	Entry-Level	\N	\N	0	\N
244	Forestry workers	9	530	27560	Low	Entry-Level	\N	\N	0	\N
245	Bank and post office clerks	15	530	27560	Low	Entry-Level	\N	\N	0	\N
246	Weighers, graders and sorters	12	530	27560	Low	Entry-Level	\N	\N	0	\N
247	Leisure and travel service occupations n.e.c.	18	530	27560	Medium	Mid-Level	\N	\N	0	\N
248	Sales supervisors	15	530	27560	Medium	Mid-Level	\N	\N	0	\N
249	Financial administrative occupations n.e.c.	15	530	27560	Low	Entry-Level	\N	\N	0	\N
250	Butchers	13	530	27560	Low	Entry-Level	\N	\N	0	\N
251	Carpenters and joiners	12	530	27560	Medium	Entry-Level	\N	\N	0	\N
252	Laboratory technicians	15	520	27040	Medium	Entry-Level	\N	\N	0	\N
253	Stock control clerks and assistants	14	520	27040	Low	Entry-Level	\N	\N	0	\N
254	Farm workers	9	520	27040	Low	Entry-Level	\N	\N	0	\N
255	Floorers and wall tilers	12	520	27040	Medium	Entry-Level	\N	\N	0	\N
256	Credit controllers	14	520	27040	Medium	Mid-Level	\N	\N	0	\N
257	Estate agents and auctioneers	14	520	27040	Medium	Mid-Level	\N	\N	0	\N
258	Air travel assistants	14	520	27040	Medium	Mid-Level	\N	\N	0	\N
259	Process operatives n.e.c.	10	520	27040	Low	Entry-Level	\N	\N	0	\N
260	Bricklayers and masons	11	520	27040	Medium	Entry-Level	\N	\N	0	\N
261	Printers	13	520	27040	Medium	Mid-Level	\N	\N	0	\N
148	Prison service officers (below principal officer)	17	660	34320	Medium	Entry-Level	\N	\N	0	\N
149	Human resources and industrial relations officers	17	660	34320	Medium	Mid-Level	\N	\N	0	\N
150	Officers of non-governmental organisations	19	650	33800	Medium	Mid-Level	\N	\N	0	\N
151	Marketing associate professionals	18	650	33800	Medium	Mid-Level	\N	\N	0	\N
152	Mobile machine drivers and operatives n.e.c.	14	650	33800	Low	Entry-Level	\N	\N	0	\N
153	Web design and development professionals	19	650	33800	High	Mid-Level	\N	\N	0	\N
154	Speech and language therapists	19	650	33800	High	Mid-Level	\N	\N	0	\N
155	Conservation professionals	17	650	33800	High	Mid-Level	\N	\N	0	\N
156	Personal assistants and other secretaries	16	650	33800	Medium	Mid-Level	\N	\N	0	\N
157	Large goods vehicle drivers	13	640	33280	Medium	Entry-Level	\N	\N	0	\N
158	NCOs and other ranks	13	640	33280	Medium	Entry-Level	\N	\N	0	\N
160	Water and sewerage plant operatives	14	630	32760	Low	Entry-Level	\N	\N	0	\N
161	Quality assurance technicians	18	630	32760	Medium	Mid-Level	\N	\N	0	\N
162	Metal machining setters and setter-operators	14	630	32760	Medium	Mid-Level	\N	\N	0	\N
163	Product, clothing and related designers	19	620	32240	High	Varied	\N	\N	0	\N
164	Pre-press technicians	16	620	32240	Medium	Mid-Level	\N	\N	0	\N
165	Book-keepers, payroll managers and wages clerks	17	610	31720	Medium	Mid-Level	\N	\N	0	\N
166	TV, video and audio engineers	13	610	31720	Medium	Mid-Level	\N	\N	0	\N
167	Managers and proprietors in forestry, fishing and related services	11	610	31720	Medium	Mid-Level	\N	\N	0	\N
168	Scaffolders, stagers and riggers	12	610	31720	Medium	Entry-Level	\N	\N	0	\N
169	Careers advisers and vocational guidance specialists	16	610	31720	Medium	Mid-Level	\N	\N	0	\N
170	Photographers, audio-visual and broadcasting equipment operators	17	600	31200	Medium	Varied	\N	\N	0	\N
171	Plasterers	14	600	31200	Medium	Entry-Level	\N	\N	0	\N
172	Graphic designers	16	600	31200	Medium	Mid-Level	\N	\N	0	\N
173	Routine inspectors and testers	14	600	31200	Low	Entry-Level	\N	\N	0	\N
174	Architectural and town planning technicians	17	600	31200	Medium	Mid-Level	\N	\N	0	\N
175	Tailors and dressmakers	22	600	31200	Medium	Mid-Level	\N	\N	0	\N
176	Police community support officers	16	600	31200	Low	Entry-Level	\N	\N	0	\N
177	Metal making and treating process operatives	13	600	31200	Low	Entry-Level	\N	\N	0	\N
178	Plumbers and heating and ventilating engineers	13	600	31200	Medium	Mid-Level	\N	\N	0	\N
179	Medical and dental technicians	16	600	31200	High	Mid-Level	\N	\N	0	\N
200	Importers and exporters	15	590	30680	Medium	Mid-Level	\N	\N	0	\N
262	Restaurant and catering establishment managers and proprietors	9	520	27040	Medium	Mid-Level	\N	\N	0	\N
263	Records clerks and assistants	14	520	27040	Low	Entry-Level	\N	\N	0	\N
264	Printing machine assistants	12	510	26520	Low	Entry-Level	\N	\N	0	\N
265	Senior care workers	15	510	26520	Medium	Mid-Level	\N	\N	0	\N
266	Market and street traders and assistants	15	510	26520	Low	Entry-Level	\N	\N	0	\N
267	Roofers, roof tilers and slaters	12	510	26520	Medium	Entry-Level	\N	\N	0	\N
268	Pensions and insurance clerks and assistants	14	510	26520	Low	Entry-Level	\N	\N	0	\N
269	Vehicle body builders and repairers	9	500	26000	Medium	Entry-Level	\N	\N	0	\N
270	Metal working machine operatives	11	500	26000	Low	Entry-Level	\N	\N	0	\N
271	Plant and machine operatives n.e.c.	11	500	26000	Low	Entry-Level	\N	\N	0	\N
272	Medical secretaries	11	500	26000	Low	Mid-Level	\N	\N	0	\N
273	Plastics process operatives	11	500	26000	Low	Entry-Level	\N	\N	0	\N
274	Sales related occupations n.e.c.	15	500	26000	Medium	Mid-Level	\N	\N	0	\N
275	Nursing auxiliaries and assistants	16	490	25480	Low	Entry-Level	\N	\N	0	\N
276	Van drivers	11	490	25480	Low	Entry-Level	\N	\N	0	\N
277	Chefs	13	490	25480	Medium	Entry-Level	\N	\N	0	\N
278	Agricultural and fishing trades n.e.c.	7	490	25480	Low	Entry-Level	\N	\N	0	\N
279	Taxi and cab drivers and chauffeurs	12	490	25480	Low	Entry-Level	\N	\N	0	\N
280	Painters and decorators	11	490	25480	Medium	Entry-Level	\N	\N	0	\N
281	Industrial cleaning process occupations	11	490	25480	Low	Entry-Level	\N	\N	0	\N
282	Elementary process plant occupations n.e.c.	10	490	25480	Low	Entry-Level	\N	\N	0	\N
283	Elementary storage occupations	13	490	25480	Low	Entry-Level	\N	\N	0	\N
284	Postal workers, mail sorters, messengers and couriers	13	490	25480	Low	Entry-Level	\N	\N	0	\N
285	Assemblers and routine operatives n.e.c.	11	490	25480	Low	Entry-Level	\N	\N	0	\N
286	Customer service occupations n.e.c.	15	480	24960	Medium	Entry-Level	\N	\N	0	\N
287	Human resources administrative occupations	13	480	24960	Low	Entry-Level	\N	\N	0	\N
288	Food, drink and tobacco process operatives	11	480	24960	Low	Entry-Level	\N	\N	0	\N
289	Glass and ceramics makers, decorators and finishers	10	480	24960	Low	Entry-Level	\N	\N	0	\N
290	Care workers and home carers	15	480	24960	Low	Entry-Level	\N	\N	0	\N
291	Sales administrators	13	480	24960	Low	Entry-Level	\N	\N	0	\N
292	Elementary construction occupations	8	480	24960	Low	Entry-Level	\N	\N	0	\N
293	Footwear and leather working trades	11	480	24960	Low	Entry-Level	\N	\N	0	\N
294	Childminders and related occupations	18	480	24960	Low	Entry-Level	\N	\N	0	\N
295	Merchandisers and window dressers	15	480	24960	Medium	Entry-Level	\N	\N	0	\N
296	Paper and wood machine operatives	10	480	24960	Low	Entry-Level	\N	\N	0	\N
297	Pest control officers	15	480	24960	Medium	Entry-Level	\N	\N	0	\N
298	Horticultural trades	6	470	24440	Low	Entry-Level	\N	\N	0	\N
299	Catering and bar managers	13	470	24440	Medium	Mid-Level	\N	\N	0	\N
300	Assemblers (electrical and electronic products)	10	470	24440	Low	Entry-Level	35.5	55	35	20
328	Sales and retail assistants	14	440	22880	Low	Entry-Level	\N	\N	0	\N
329	Groundsmen and greenkeepers	7	440	22880	Low	Entry-Level	\N	\N	0	\N
330	Bakers and flour confectioners	12	440	22880	Medium	Entry-Level	\N	\N	0	\N
331	Glaziers, window fabricators and fitters	9	430	22360	Medium	Entry-Level	\N	\N	0	\N
332	Telephone salespersons	11	430	22360	Low	Entry-Level	\N	\N	0	\N
333	Street cleaners	12	430	22360	Low	Entry-Level	\N	\N	0	\N
334	Receptionists	10	430	22360	Low	Entry-Level	\N	\N	0	\N
335	Housekeepers and related occupations	14	430	22360	Low	Entry-Level	\N	\N	0	\N
336	Animal care services occupations n.e.c.	17	430	22360	Medium	Entry-Level	\N	\N	0	\N
337	Fishmongers and poultry dressers	11	420	21840	Low	Entry-Level	\N	\N	0	\N
338	Debt, rent and other cash collectors	12	420	21840	Low	Entry-Level	\N	\N	0	\N
339	Veterinary nurses	13	420	21840	Medium	Entry-Level	\N	\N	0	\N
340	Telephonists	14	420	21840	Low	Entry-Level	\N	\N	0	\N
341	Elementary cleaning occupations n.e.c.	11	410	21320	Low	Entry-Level	\N	\N	0	\N
342	Pharmacy and other dispensing assistants	12	410	21320	Low	Entry-Level	\N	\N	0	\N
343	Fitness instructors	16	410	21320	Medium	Entry-Level	\N	\N	0	\N
1	Chief executives and senior officials	56	2000	104000	High	Senior-Level	40.4	100	75	25
2	Brokers	52	1980	102960	High	Senior-Level	39.2	50	30	20
3	Aircraft pilots and flight engineers	46	1850	96200	High	Senior-Level	39.9	60	45	15
4	Air traffic controllers	37	1730	89960	High	Mid-Level	47	40	35	5
5	Advertising and public relations directors	41	1700	88400	High	Senior-Level	41	80	60	20
6	Legal professionals n.e.c.	51	1690	87880	High	Senior-Level	33	90	70	20
7	Marketing and sales directors	43	1590	82680	High	Senior-Level	37	70	50	20
8	Information technology and telecommunications directors	42	1590	82680	High	Senior-Level	38	65	45	20
9	Financial managers and directors	40	1520	79040	High	Senior-Level	38	75	55	20
10	Medical practitioners	42	1440	74880	High	Senior-Level	34	120	90	30
11	Financial institution managers and directors	43	1410	73320	High	Senior-Level	33	110	80	30
12	Officers in armed forces	\N	1370	71240	High	Senior-Level	\N	\N	0	\N
14	Sports players	33	1290	67080	Medium	Mid-Level	33	60	40	20
51	Waste disposal and environmental services managers	17	920	47840	High	Mid-Level	40.1	110	85	25
52	Paramedics	24	920	47840	High	Mid-Level	38.8	70	45	25
53	Physical scientists	22	920	47840	High	Mid-Level	39.7	80	55	25
54	Finance and investment analysts and advisers	26	920	47840	High	Mid-Level	41.5	60	50	10
55	Mechanical engineers	24	920	47840	High	Mid-Level	39.3	85	70	15
56	Police officers (sergeant and below)	23	910	47320	Medium	Mid-Level	\N	\N	0	\N
57	Chartered and certified accountants	27	900	46800	High	Mid-Level	\N	\N	0	\N
101	Rail construction and maintenance operatives	16	760	39520	Medium	Entry-Level	38.5	70	50	20
102	Dancers and choreographers	26	760	39520	High	Varied	39.0	60	45	15
103	Health and safety officers	20	750	39000	High	Mid-Level	40.2	75	60	15
104	Physiotherapists	22	750	39000	High	Mid-Level	41.8	80	70	10
105	Pipe fitters	13	750	39000	Medium	Entry-Level	39.5	65	55	10
106	Rail travel assistants	20	750	39000	Medium	Entry-Level	\N	\N	0	\N
107	Veterinarians	21	740	38480	High	Mid-Level	\N	\N	0	\N
108	IT engineers	18	740	38480	High	Mid-Level	\N	\N	0	\N
109	Managers and directors in retail and wholesale	19	740	38480	High	Mid-Level	\N	\N	0	\N
110	Quarry workers and related operatives	12	740	38480	Low	Entry-Level	\N	\N	0	\N
111	Special needs education teaching professionals	27	730	37960	High	Mid-Level	\N	\N	0	\N
112	Podiatrists	33	730	37960	High	Mid-Level	\N	\N	0	\N
113	Office managers	20	730	37960	Medium	Mid-Level	\N	\N	0	\N
114	IT operations technicians	22	730	37960	High	Mid-Level	\N	\N	0	\N
115	Managers and proprietors in agriculture and horticulture	16	730	37960	Medium	Mid-Level	\N	\N	0	\N
116	Garage managers and proprietors	11	720	37440	Medium	Mid-Level	\N	\N	0	\N
117	Business sales executives	19	720	37440	Medium	Mid-Level	\N	\N	0	\N
118	Metal plate workers, and riveters	14	720	37440	Medium	Entry-Level	\N	\N	0	\N
119	Occupational therapists	21	720	37440	High	Mid-Level	\N	\N	0	\N
120	Electrical and electronic trades n.e.c.	16	720	37440	Medium	Mid-Level	\N	\N	0	\N
121	Public services associate professionals	18	710	36920	Medium	Mid-Level	\N	\N	0	\N
122	Travel agency managers and proprietors	13	700	36400	Medium	Mid-Level	\N	\N	0	\N
123	Building and civil engineering technicians	19	700	36400	High	Mid-Level	\N	\N	0	\N
124	Marine and waterways transport operatives	15	700	36400	Medium	Entry-Level	\N	\N	0	\N
125	Metal working production and maintenance fitters	15	700	36400	Medium	Mid-Level	\N	\N	0	\N
126	Leisure and sports managers	13	700	36400	Medium	Mid-Level	\N	\N	0	\N
127	Company secretaries	24	690	35880	High	Mid-Level	\N	\N	0	\N
128	Artists	20	690	35880	High	Varied	\N	\N	0	\N
129	Road construction operatives	13	690	35880	Low	Entry-Level	\N	\N	0	\N
130	Air-conditioning and refrigeration engineers	13	690	35880	Medium	Mid-Level	\N	\N	0	\N
131	Business and related associate professionals n.e.c.	19	680	35360	Medium	Mid-Level	\N	\N	0	\N
132	Legal associate professionals	19	680	35360	High	Mid-Level	\N	\N	0	\N
133	IT user support technicians	21	680	35360	High	Mid-Level	\N	\N	0	\N
134	Authors, writers and translators	21	680	35360	High	Varied	\N	\N	0	\N
135	Managers and directors in storage and warehousing	18	670	34840	Medium	Mid-Level	\N	\N	0	\N
136	Electricians and electrical fitters	15	670	34840	Medium	Mid-Level	\N	\N	0	\N
137	Agricultural machinery drivers	13	670	34840	Low	Entry-Level	\N	\N	0	\N
138	Therapy professionals n.e.c.	27	670	34840	High	Mid-Level	\N	\N	0	\N
139	Tool makers, tool fitters and markers-out	14	670	34840	Medium	Mid-Level	\N	\N	0	\N
140	Finance officers	19	670	34840	Medium	Mid-Level	\N	\N	0	\N
141	Social and humanities scientists	15	670	34840	High	Mid-Level	\N	\N	0	\N
142	Vocational and industrial trainers and instructors	18	670	34840	Medium	Mid-Level	\N	\N	0	\N
143	Coal mine operatives	12	670	34840	Low	Entry-Level	\N	\N	0	\N
144	Customer service managers and supervisors	20	660	34320	Medium	Mid-Level	\N	\N	0	\N
145	Buyers and procurement officers	18	660	34320	Medium	Mid-Level	\N	\N	0	\N
146	Planning, process and production technicians	20	660	34320	Medium	Mid-Level	\N	\N	0	\N
147	Chemical and related process operatives	15	660	34320	Low	Entry-Level	\N	\N	0	\N
159	Draughtspersons	19	640	33280	High	Mid-Level	\N	\N	0	\N
301	Furniture makers and other craft woodworkers	12	470	24440	Medium	Mid-Level	36.0	45	30	15
302	Weavers and knitters	11	470	24440	Low	Entry-Level	34.2	60	45	15
303	Roundspersons and van salespersons	13	470	24440	Low	Entry-Level	37.5	65	50	15
304	Tyre, exhaust and windscreen fitters	10	470	24440	Low	Entry-Level	38.8	50	40	10
305	Hospital porters	12	470	24440	Low	Entry-Level	\N	\N	0	\N
306	Conservation and environmental associate professionals	13	470	24440	Medium	Mid-Level	\N	\N	0	\N
307	Call and contact centre occupations	14	470	24440	Low	Entry-Level	\N	\N	0	\N
308	Library clerks and assistants	14	460	23920	Low	Entry-Level	\N	\N	0	\N
309	Sports coaches, instructors and officials	13	460	23920	Medium	Mid-Level	\N	\N	0	\N
310	Elementary security occupations n.e.c.	14	460	23920	Low	Entry-Level	\N	\N	0	\N
311	Textile process operatives	10	460	23920	Low	Entry-Level	\N	\N	0	\N
312	Collector salespersons and credit agents	12	460	23920	Low	Entry-Level	\N	\N	0	\N
313	Packers, bottlers, canners and fillers	10	460	23920	Low	Entry-Level	\N	\N	0	\N
314	Dispensing opticians	14	460	23920	Medium	Mid-Level	\N	\N	0	\N
315	Health associate professionals n.e.c.	13	460	23920	Medium	Mid-Level	\N	\N	0	\N
316	Refuse and salvage occupations	12	460	23920	Low	Entry-Level	\N	\N	0	\N
317	Caretakers	11	450	23400	Low	Entry-Level	\N	\N	0	\N
318	Parking and civil enforcement occupations	12	450	23400	Low	Entry-Level	\N	\N	0	\N
319	Fishing and other elementary agriculture occupations n.e.c.	9	450	23400	Low	Entry-Level	\N	\N	0	\N
320	Glass and ceramics process operatives	9	450	23400	Low	Entry-Level	\N	\N	0	\N
321	Vehicle and parts salespersons and advisers	11	450	23400	Low	Entry-Level	\N	\N	0	\N
322	School secretaries	10	450	23400	Low	Entry-Level	\N	\N	0	\N
323	Print finishing and binding workers	11	450	23400	Low	Entry-Level	\N	\N	0	\N
324	Typists and related keyboard occupations	11	450	23400	Low	Entry-Level	\N	\N	0	\N
325	Cleaning and housekeeping managers and supervisors	14	440	22880	Medium	Mid-Level	\N	\N	0	\N
326	Gardeners and landscape gardeners	6	440	22880	Low	Entry-Level	\N	\N	0	\N
327	Market research interviewers	26	440	22880	Medium	Entry-Level	\N	\N	0	\N
355	Upholsterers	11	390	20280	Medium	Entry-Level	\N	\N	0	\N
356	Textiles, garments and related trades n.e.c.	10	390	20280	Low	Entry-Level	\N	\N	0	\N
357	Cleaners and domestics	9	390	20280	Low	Entry-Level	\N	\N	0	\N
358	Elementary sales occupations n.e.c.	12	380	19760	Low	Entry-Level	\N	\N	0	\N
359	Sewing machinists	11	380	19760	Low	Entry-Level	\N	\N	0	\N
360	Elementary administration occupations n.e.c.	9	380	19760	Low	Entry-Level	\N	\N	0	\N
361	Care escorts	26	370	19240	Low	Entry-Level	\N	\N	0	\N
362	Nursery nurses and assistants	12	370	19240	Low	Entry-Level	\N	\N	0	\N
363	Window cleaners	12	370	19240	Low	Entry-Level	\N	\N	0	\N
364	Kitchen and catering assistants	9	360	18720	Low	Entry-Level	\N	\N	0	\N
365	Leisure and theme park attendants	11	360	18720	Low	Entry-Level	\N	\N	0	\N
366	Beauticians and related occupations	10	360	18720	Low	Entry-Level	\N	\N	0	\N
367	Launderers, dry cleaners and pressers	9	360	18720	Low	Entry-Level	\N	\N	0	\N
368	Playworkers	25	350	18200	Low	Entry-Level	\N	\N	0	\N
369	Other elementary services occupations n.e.c.	10	350	18200	Low	Entry-Level	\N	\N	0	\N
370	Waiters and waitresses	9	340	17680	Low	Entry-Level	\N	\N	0	\N
371	Bar staff\n\n	9	340	17680	Low	Entry-Level	\N	\N	0	\N
372	Florists	10	330	17160	Medium	Entry-Level	\N	\N	0	\N
373	Hairdressers and barbers	10	330	17160	Low	Entry-Level	\N	\N	0	\N
344	Sports and leisure assistants	11	410	21320	Low	Entry-Level	\N	\N	0	\N
345	Travel agents	11	410	21320	Medium	Entry-Level	\N	\N	0	\N
346	Dental nurses	13	400	20800	Medium	Entry-Level	\N	\N	0	\N
347	Hairdressing and beauty salon managers and proprietors	8	400	20800	Medium	Mid-Level	\N	\N	0	\N
348	Shelf fillers	12	400	20800	Low	Entry-Level	\N	\N	0	\N
349	Teaching assistants	14	400	20800	Medium	Entry-Level	\N	\N	0	\N
350	Educational support assistants	14	400	20800	Medium	Entry-Level	\N	\N	0	\N
351	Vehicle valeters and cleaners	9	390	20280	Low	Entry-Level	\N	\N	0	\N
352	Cooks	11	390	20280	Low	Entry-Level	\N	\N	0	\N
353	Retail cashiers and check-out operators	13	390	20280	Low	Entry-Level	\N	\N	0	\N
354	School midday and crossing patrol occupations	24	390	20280	Low	Entry-Level	\N	\N	0	\N
494	Bar staff	9	340	17680	Low	Entry-Level	\N	\N	0	\N
\.


--
-- Data for Name: player_outgoings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player_outgoings (player_id, weekly_housing, monthly_housing, annual_housing, weekly_transport, monthly_transport, annual_transport, weekly_food, monthly_food, annual_food, weekly_utilities, monthly_utilities, annual_utilities, weekly_recreation, monthly_recreation, annual_recreation, weekly_restaurants, monthly_restaurants, annual_restaurants, weekly_household, monthly_household, annual_household, weekly_council_tax, monthly_council_tax, annual_council_tax, weekly_communications, monthly_communications, annual_communications, weekly_insurance, monthly_insurance, annual_insurance, weekly_other, monthly_other, annual_other, weekly_education, monthly_education, annual_education, weekly_licences_fines, monthly_licences_fines, annual_licences_fines, weekly_holiday_spending, monthly_holiday_spending, annual_holiday_spending) FROM stdin;
1	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
2	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
3	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
10	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
11	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
12	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
13	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
19	50.00	200.00	2400.00	20.00	80.00	960.00	40.00	160.00	1920.00	20.00	80.00	960.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	10.00	40.00	480.00	5.00	20.00	240.00	10.00	40.00	480.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00	0.00
\.


--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.players (player_id, username, email, current_balance, total_income, total_savings, created_at, last_login, password, skill, experience, employment_status, health) FROM stdin;
2	steve	smcsorl@sky.com	5000.00	0.00	0.00	2024-01-13 22:52:22.289362+00	\N	$2b$10$bH4yT3znN0u2TMa0E.XYBOmU5.e4yfRpBHoA/BnYmqc53R5sGTpOm	Low	Entry-Level	Unemployed	100
3	Emma	emma@test.com	0.00	0.00	0.00	2024-01-14 12:59:39.169325+00	\N	$2b$10$DGJ5tWTkv7TB2o2ZtgJXF.msPmSgz8UUjW9..naPdltBP8DBwKxwa	Low	Entry-Level	Unemployed	100
4	john	john@test.com	0.00	0.00	0.00	2024-01-14 13:08:05.108011+00	\N	$2b$10$xxP9chWcjYDll8z3hneHvOL8Hza2aNusd6Z7WBsWkUbBzEp2mkGde	Low	Entry-Level	Unemployed	100
5	jim	jim@test.com	0.00	0.00	0.00	2024-01-14 13:11:59.343075+00	\N	$2b$10$TSLAJi6fZelZFQ/z8tMSzuypmGvtRtVlRf42a0oy1zVewmry.TBFe	Low	Entry-Level	Unemployed	100
6	bob	bob@test.com	0.00	0.00	0.00	2024-01-14 13:17:25.285116+00	\N	$2b$10$FO6M0W6qmzS4aj7/IVdoz.dyEbZKDzUDYHwn3vYD9ikfnOLlCNJNy	Low	Entry-Level	Unemployed	100
7	wim	win@adad.com	0.00	0.00	0.00	2024-01-14 13:31:33.167326+00	\N	$2b$10$TQcJM4.z7Ig3xugYGsAIsOi.ESgiLZ9K.dy3vqvi1CnaoRkZ5GLuC	Low	Entry-Level	Unemployed	100
8	steve3	fsafdasf@faasfd.com	0.00	0.00	0.00	2024-01-14 13:36:56.226263+00	\N	$2b$10$Hk2aCdnYt.rgGIeR2JsK.On0gZXkwgJaMw5j.EiTjgSlmyaR2bvve	Low	Entry-Level	Unemployed	100
9	steve324234	dasdasd@dasdasd.com	0.00	0.00	0.00	2024-01-14 13:39:02.488481+00	\N	$2b$10$9CmA0aWKm2g8ChXNSElkduD7xvsBw231UQwVLe5N2R88PE89iukaK	Low	Entry-Level	Unemployed	100
10	red	red@dafaf.com	0.00	0.00	0.00	2024-01-14 16:28:42.82627+00	\N	$2b$10$anR.kNUnay3vtIKqSqHwM.0oW5fSlfowmm6qSjQiWgJW2lZ.Ucr6m	Low	Entry-Level	Unemployed	100
11	weeee	werwer@fsfsf.com	0.00	0.00	0.00	2024-01-14 16:29:21.202462+00	\N	$2b$10$Em/w6se1.p6f6lfXlikk4eFI0ansJo3WvLHISGRKqy4JCjK2QxRV2	Low	Entry-Level	Unemployed	100
12	steveqwerty	qwerty@wwww.com	0.00	0.00	0.00	2024-01-14 16:31:25.61867+00	\N	$2b$10$QL8sJVb43J4kpxgevYrTm.VvSEZxjy5eJWfUN4YOouAjmdpGhR.Xe	Low	Entry-Level	Unemployed	100
13	tester	tester@adasda.com	0.00	0.00	0.00	2024-01-14 16:39:22.137212+00	\N	$2b$10$nOuamZGS/iI.y6t.fhfEXOeyDRTXD8brV5S1CEJqRkR2b3Hy/Tgfm	Low	Entry-Level	Unemployed	100
15	steve11111111	dasdasd22@gsg.com	0.00	0.00	0.00	2024-01-15 01:33:59.62765+00	\N	$2b$10$LPI5lf/OpYm6dbQf2xFWeO2oDSTv2d8h3ON/sysJB7kfNUNSBdk86	Low	Entry-Level	Unemployed	100
16	smcsorl	smcsorl@googlemail.com	0.00	0.00	0.00	2024-01-17 21:57:46.481889+00	\N	$2b$10$Zn.i4uDYsNAvFA/CuNsbV.V/fYxttLh9RdEJAK9ZnL8Z01IYQ6432	Low	Entry-Level	Unemployed	100
17	tester2	test2@test.com	\N	\N	\N	2024-01-17 22:38:28.572892+00	\N	$2b$10$dPWsGT.mDAAOmKZh4Qjj1.I5.Kyxi7vxPzgiibl/a9vDmnmTMKIcu	Low	Entry-Level	Unemployed	100
18	steve7	steve@sky.com	\N	\N	\N	2024-01-17 22:43:54.280136+00	\N	$2b$10$kHZZTLWiJgbU1gHhqODR4OvGtXuWMB1CYc7F.d1MtdR96oMxaYTE6	Low	Entry-Level	Unemployed	100
19	steve8	steve8@sky.com	0.00	0.00	0.00	2024-01-17 22:53:01.210298+00	\N	$2b$10$IjkjM17jqcRGl9Jdcy4qOelBAASDma4p1b.4Ru2ICb0FyL8RfGPSy	Low	Entry-Level	Unemployed	100
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transactions (transaction_id, player_id, type, amount, description, transaction_date) FROM stdin;
\.


--
-- Name: challenges_challenge_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.challenges_challenge_id_seq', 1, false);


--
-- Name: economic_calendar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.economic_calendar_id_seq', 86, true);


--
-- Name: economic_data_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.economic_data_id_seq1', 5, true);


--
-- Name: economiccalendar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.economiccalendar_id_seq', 1, false);


--
-- Name: events_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_event_id_seq', 65, true);


--
-- Name: investments_investment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.investments_investment_id_seq', 1, false);


--
-- Name: jobboard_jobid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jobboard_jobid_seq', 498, true);


--
-- Name: player_outgoings_player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.player_outgoings_player_id_seq', 3, true);


--
-- Name: players_player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.players_player_id_seq', 19, true);


--
-- Name: transactions_transaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transactions_transaction_id_seq', 1, false);


--
-- Name: challenges challenges_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_pkey PRIMARY KEY (challenge_id);


--
-- Name: economic_calendar economic_calendar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.economic_calendar
    ADD CONSTRAINT economic_calendar_pkey PRIMARY KEY (id);


--
-- Name: economic_data economic_data_data_type_date_updated_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.economic_data
    ADD CONSTRAINT economic_data_data_type_date_updated_key1 UNIQUE (data_type, date_updated);


--
-- Name: economic_data economic_data_pkey1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.economic_data
    ADD CONSTRAINT economic_data_pkey1 PRIMARY KEY (id);


--
-- Name: economiccalendar economiccalendar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.economiccalendar
    ADD CONSTRAINT economiccalendar_pkey PRIMARY KEY (id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (event_id);


--
-- Name: investments investments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investments
    ADD CONSTRAINT investments_pkey PRIMARY KEY (investment_id);


--
-- Name: jobboard jobboard_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobboard
    ADD CONSTRAINT jobboard_pkey PRIMARY KEY (jobid);


--
-- Name: player_outgoings player_outgoings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_outgoings
    ADD CONSTRAINT player_outgoings_pkey PRIMARY KEY (player_id);


--
-- Name: players players_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_pkey PRIMARY KEY (player_id);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id);


--
-- Name: investments investments_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investments
    ADD CONSTRAINT investments_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.players(player_id);


--
-- Name: transactions transactions_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.players(player_id);


--
-- PostgreSQL database dump complete
--

