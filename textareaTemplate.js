const body = `
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		</head>
		<body>
			<form action="/upload" method="POST">
				<textarea name="text" id="" cols=60 rows="20"></textarea>
				<input type="submit" value="Submit text" />
			</form>
		</body>
	</html>
`

exports.body = body;
