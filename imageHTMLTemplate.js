const body = `
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		</head>
		<body>
			<form action="/upload" enctype="multipart/form-data" method="POST">
				<input type="file" name="upload" />
				<input type="submit" value="Upload file" />
			</form>
		</body>
	</html>
`

exports.body = body;
