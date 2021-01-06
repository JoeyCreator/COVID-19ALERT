	<script>
		 var userPreference;

		if (confirm("Do you want to save changes?") == true) {
			userPreference = "Data saved successfully!";
		} else {
			userPreference = "Save Canceled!";
		}

		document.getElementById("msg").innerHTML = userPreference; 

    </script>